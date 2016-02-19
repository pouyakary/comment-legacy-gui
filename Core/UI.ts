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
		
		// Input Box IDs
		const CommentKindBox 					= "commentformatbox";
		const CommentValueBox 					= "cp-value";
		const CommentSizeBox					= "cp-size";
		const CommentIndexBox 					= "cp-index";
		
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
		
		// Generating Settings
		const ViewDivID							= 'view';
		const CommentBoxStyleClassName 			= 'comment-box';
			
	//
	// ─── ON ADD COMMENT ─────────────────────────────────────────────────────────────
	//
	
		export function OnTextInputKeyPress ( event: any ) {
			if ( event.keyCode == 13 ) {
				CreateNewComment( );
			}
		}
		
		function CreateNewComment ( ) {
			UpdateGlobalInputVariables( );
			UpdateCommentChars( );
			
			const commentString = GenerateComment( );
			
			var commentBox = document.createElement( 'pre' );
			commentBox.className = CommentBoxStyleClassName;
			commentBox.innerHTML = commentString;
			
			
			var viewDiv = document.getElementById( ViewDivID );
			if ( viewDiv.children.length == 0 ) {
				viewDiv.appendChild( commentBox );
			} else {
				viewDiv.insertBefore( commentBox , viewDiv.firstChild );
			}
			
			if ( viewDiv.children.length > 20 ) {
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
			
			const 	displayOn 		= 'inline';
			const 	displayOff  	= 'none';	

			switch ( GetCommentKind( ) ) {
				case CommentStyleClass:
					sizeBox.style.display 	= displayOn;
					indexBox.style.display 	= displayOff;
					valueBox.style.display 	= displayOn;
					break;
				
				case CommentStyleFlag:
					sizeBox.style.display 	= displayOn;
					indexBox.style.display 	= displayOn;
					valueBox.style.display 	= displayOn;
					break;
					
				case CommentStyleSection:
					sizeBox.style.display 	= displayOn;
					indexBox.style.display	 = displayOff;
					valueBox.style.display 	= displayOn;
					break;
				
				case CommentStyleSubSection:
					sizeBox.style.display 	= displayOn;
					indexBox.style.display 	= displayOff;
					valueBox.style.display 	= displayOn;
					break;
					
				case CommentStyleLine:
					sizeBox.style.display 	= displayOn;
					indexBox.style.display 	= displayOff;
					valueBox.style.display 	= displayOff;
					break;
					
				case CommentStyleSubLine:
					sizeBox.style.display 	= displayOn;
					indexBox.style.display 	= displayOff;
					valueBox.style.display 	= displayOff;
					break;
					
				case CommentStyleNote:
					sizeBox.style.display 	= displayOff;
					indexBox.style.display 	= displayOff;
					valueBox.style.display 	= displayOff;
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
		export function UpdateGlobalInputVariables ( ) {
			globalSizeValue = ReadNumberInput( CommentSizeBox );
			globalIndexValue = ReadNumberInput( CommentIndexBox );
			globalTextValue = GetInputElementValue( CommentValueBox );
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
			var result = parseInt (
				( <HTMLInputElement> ( document.getElementById( id ) ) ).value 
			)
			if ( isNaN( result) ) {
				return 0;
			} else {
				return result;
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

	// ────────────────────────────────────────────────────────────────────────────────

}