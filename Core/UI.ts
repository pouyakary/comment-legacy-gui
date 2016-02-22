//
// Comment IV 
//    Copyright 2016 Kary Foundation, Inc.
//    Author: Pouya Kary <k@karyfoundation.org>
//

/// <reference path="Comment.ts" />

module UI {

	//
	// ─── INFO ───────────────────────────────────────────────────────────────────────
	//

		// Input Divs
		const OneLineInputDivID 				= "one-line-value-div";
		const SizeInputDivID 					= "size-value-div";
		const IndexInputDivID 					= "index-value-div";
		const SeparatorCharacterDivID			= "separator-value-div";
		
		// Input Box IDs
		const CommentKindBox 					= "commentformatbox";
		const CommentValueBox 					= "cp-value";
		const CommentSizeBox					= "cp-size";
		const CommentIndexBox 					= "cp-index";
		const CommentSeparatorCharacterBox		= "cp-separator";
				
		// Language Settings
		const CommentStyleMultiLineTopLeft 		= 'cs-top-left';
		const CommentStyleMultiLineTopRight 	= 'cs-top-right';
		const CommentStyleMultiLineBottomLeft 	= 'cs-bottom-left';
		const CommentStyleMultiLineBottomRight 	= 'cs-bottom-right';
		const CommentStyleOneLine				= 'cs-one-line';
		
		// Comment Sytle Values
		const CommentStyleClass					= 'class';
		const CommentStyleFlag					= 'flag';
		const CommentStyleSection				= 'section';
		const CommentStyleSubSection			= 'subsection';
		const CommentStyleLine					= 'line';
		const CommentStyleSubLine				= 'subline';
		const CommentStyleNote					= 'note';
		const CommentStyleSeparator 			= 'separator';
		
		// Generating Settings
		const ViewDivID							= 'view';
		const CommentBoxStyleClassName 			= 'comment-box';
		const TheKaryHorseDivID 				= 'kary-horse-back';
		const ErrorMessageBoxClassName			= 'error-box';
		
		// Constant Settings
		const displayOn 						= 'inline';
		const displayOff  						= 'none';	
		const viewBoxBackgroundImageHide		= 'kary-horse-back-hide';
		const viewBoxBackgroundImageShow		= 'kary-horse-back-show';
			
	//
	// ─── ON ADD COMMENT ─────────────────────────────────────────────────────────────
	//
	
		export function OnTextInputKeyPress ( event: any ) {
			if ( event.keyCode == 13 ) {
				CreateNewComment( );
			}
		}
		
		export function CreateNewComment ( ) {
			HideTheKaryHorse( );
			UpdateCommentChars( );
			
			let successOfLoadingNumericalInputs = UpdateGlobalInputVariables( );
			var viewDiv = document.getElementById( ViewDivID );
			var resultBox = document.createElement( 'pre' );
			
			if ( successOfLoadingNumericalInputs ) {
				
				//
				// - - adding the comment - - - - - - - - - - - - - - - - - - - - - - - -
				//
				
					// Generating the Comment
					const commentString = GenerateComment( );
					
					// Generating the Comment Box
					resultBox.className = CommentBoxStyleClassName;
					resultBox.innerHTML = commentString;
					
				//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
				
			} else {
				
				//
				// - - showing errors - - - - - - - - - - - - - - - - - - - - - - - - - -
				//
				
					var errorBox = document.createElement( 'pre' );
					resultBox.className = CommentBoxStyleClassName;
					resultBox.classList.add( ErrorMessageBoxClassName );
					resultBox.innerHTML = 'OPERATION FAILD: ERROR IN LOADING THE NUMERICAL INPUTS';
				
				//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
				
			}
			
			// Adding the comment
			if ( viewDiv.children.length == 0 ) {
				viewDiv.appendChild( resultBox );
			} else {
				viewDiv.insertBefore( resultBox , viewDiv.firstChild );
			}
			
			// Removing DOM Elements that are out of the div and are
			// not visible for memory management reasons
			if ( viewDiv.children.length > 10 ) {
				viewDiv.removeChild( viewDiv.lastChild );
			}
		}

	//
	// ─── ON GENERATE COMMENT ────────────────────────────────────────────────────────
	//

		/**
		 * Gives the comment style and calls the currect
		 * function to generate that kind of comment
		 * and then returns the comment as a string.
		 */
		function GenerateComment ( ) : string {	
			var commentString: string;
			switch ( GetCommentKind( ) ) {
				case CommentStyleClass:
					commentString = Core.GenerateClassComment( );
					break;
				
				case CommentStyleFlag:
					commentString = Core.GenerateFlagCommet( );
					break;
				
				case CommentStyleSection: 
					commentString = Core.GenerateSectionComment( );
					break;
					
				case CommentStyleSubSection:
					commentString = Core.GenerateSubSectionComment( );
					break;
					
				case CommentStyleLine:
					commentString = Core.GenerateLineComment( );
					break;
				
				case CommentStyleSubLine:
					commentString = Core.GenerateSubLineComment( );
					break;
					
				case CommentStyleSeparator:
					commentString = Core.GenerateSeparatorComment( );
					break;
					
			}
			return commentString;
		}

	//
	// ─── EVENT HANDLERS ─────────────────────────────────────────────────────────────
	//

		/**
		 * Set's the visibility of the user input elements
		 * based on the current comment style to reduce user
		 * errors and show the necessary settings for the
		 * current comment style.
		 */
		export function LoadInputBoxes (  ) {
			
			var 	sizeBox 		= document.getElementById( SizeInputDivID );
			var 	indexBox 		= document.getElementById( IndexInputDivID );
			var 	valueBox		= document.getElementById( OneLineInputDivID );
			var 	separtorBox		= document.getElementById( SeparatorCharacterDivID );

			switch ( GetCommentKind( ) ) {
				case CommentStyleClass:
					sizeBox.style.display 		= displayOn;
					indexBox.style.display 		= displayOff;
					valueBox.style.display 		= displayOn;
					separtorBox.style.display 	= displayOff;
					break;
				
				case CommentStyleFlag:
					sizeBox.style.display 		= displayOn;
					indexBox.style.display 		= displayOn;
					valueBox.style.display 		= displayOn;
					separtorBox.style.display 	= displayOff;
					break;
					
				case CommentStyleSection:
					sizeBox.style.display 		= displayOn;
					indexBox.style.display	 	= displayOff;
					valueBox.style.display 		= displayOn;
					separtorBox.style.display	= displayOff;
					break;
				
				case CommentStyleSubSection:
					sizeBox.style.display 		= displayOn;
					indexBox.style.display 		= displayOff;
					valueBox.style.display 		= displayOn;
					separtorBox.style.display	= displayOff;
					break;
					
				case CommentStyleLine:
					sizeBox.style.display 		= displayOn;
					indexBox.style.display 		= displayOff;
					valueBox.style.display 		= displayOff;
					separtorBox.style.display	= displayOff;
					break;
					
				case CommentStyleSubLine:
					sizeBox.style.display 		= displayOn;
					indexBox.style.display 		= displayOff;
					valueBox.style.display 		= displayOff;
					separtorBox.style.display	= displayOff;
					break;
					
				case CommentStyleSeparator:
					sizeBox.style.display 		= displayOff;
					indexBox.style.display 		= displayOff;
					valueBox.style.display 		= displayOff;
					separtorBox.style.display	= displayOn;
					break;
					
				case CommentStyleNote:
					sizeBox.style.display 		= displayOff;
					indexBox.style.display 		= displayOff;
					valueBox.style.display 		= displayOff;
					separtorBox.style.display	= displayOff;
					break;
			}
		}
		
	//
	// ─── UPDATE COMMENT CHARS ───────────────────────────────────────────────────────
	//

		/**
		 * Updates the global language setting variables based on the user input.
		 */
		export function UpdateCommentChars ( ) {
			languageMultiLineBottomLeft 	= GetInputElementValue( CommentStyleMultiLineBottomLeft );
			languageMultiLineBottomRight 	= GetInputElementValue( CommentStyleMultiLineBottomRight );
			languageMultiLineTopLeft 		= GetInputElementValue( CommentStyleMultiLineTopLeft );
			languageMultiLineTopRight 		= GetInputElementValue( CommentStyleMultiLineTopRight );
			languageOneLine 				= GetInputElementValue( CommentStyleOneLine );
		}
	
	//
	// ─── UPDATE GLOBAL VARIABLE INFOS ───────────────────────────────────────────────
	//

		/** 
		 * Updates the global variables once they are changed 
		 */
		export function UpdateGlobalInputVariables ( ) : boolean {
			globalSizeValue 				= ReadNumberInput( CommentSizeBox );
			globalIndexValue 				= ReadNumberInput( CommentIndexBox );
			globalSeparatorCharacterValue 	= GetInputElementValue( CommentSeparatorCharacterBox );
			globalTextValue 				= GetInputElementValue( CommentValueBox );
			
			var result = true;
			if ( globalSizeValue == 0 ) 
				result = false;
			if ( globalIndexValue == 0 ) 
				result = false;
				
			return result;
		}

	//
	// ─── GET MODEL INFO ─────────────────────────────────────────────────────────────
	//

		/** 
		 * Getts the current Command Kind from the select box of dashboard. 
		 */
		function GetCommentKind ( ) : string {
			var styleBox = <HTMLSelectElement> document.getElementById( CommentKindBox );
			return styleBox.options[ styleBox.selectedIndex ].value;
		}

	//
	// ─── READ FROM NUMBER INPUT ─────────────────────────────────────────────────────
	//
	
		/** 
		 * Reads the number input from HTML Input Elements by a 
		 * given ID and returns 0 when fails to interpret the 
		 * user input.
		 */
		function ReadNumberInput ( id: string ) : number {
			let value = ( <HTMLInputElement> ( document.getElementById( id ) ) ).value;
			if ( value.match( /^\d+$/ ) ) {
				return parseInt ( value )
			} else {
				return 0;
			}
		}
		
	//
	// ─── GET INPUT ELEMENT VALUE ────────────────────────────────────────────────────
	//
	
		/** 
		 * Reads the value of an HTML Input Element by ID. 
		 */
		function GetInputElementValue ( id: string ) {
			return ( <HTMLInputElement> document.getElementById( id ) ).value;
		}
		
	//
	// ─── KARY LOGO HANDLERS ─────────────────────────────────────────────────────────
	//
		
		function HideTheKaryHorse ( ) {
			var classNames = document.getElementById( ViewDivID ).classList;
			classNames.remove( viewBoxBackgroundImageShow );
			classNames.add( viewBoxBackgroundImageHide );
		}
		
		function ShowTheKaryHorse ( ) {
			var classNames = document.getElementById( ViewDivID ).classList;
			classNames.remove( viewBoxBackgroundImageHide );
			classNames.add( viewBoxBackgroundImageShow );
		}
	
	//
	// ─── VIEW CLEANER ───────────────────────────────────────────────────────────────
	//	
	
		export function CleanCommentView ( ) {
			document.getElementById( ViewDivID ).innerHTML = '';
			ShowTheKaryHorse( );
		}

	// ────────────────────────────────────────────────────────────────────────────────

}