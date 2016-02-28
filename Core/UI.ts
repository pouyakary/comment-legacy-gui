//
// Comment IV 
//    Copyright 2016 Kary Foundation, Inc.
//    Author: Pouya Kary <k@karyfoundation.org>
//

/// <reference path="comment.ts" />

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
		
		// Indentation
		const CommentIndentString               = 'ci-string';
		const CommentIndentSize	                = 'ci-size';
		
		// Comment Sytle Values
		const CommentStyleClass					= 'class';
		const CommentStyleFlag					= 'flag';
		const CommentStyleSection				= 'section';
		const CommentStyleSubSection			= 'subsection';
		const CommentStyleInSection				= 'insection';
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
	
		/**
		 * On the event of keypress if the key be the enter it 
		 * will generate a new comment
		 */
		export function OnTextInputKeyPress ( event: KeyboardEvent ) {
			if ( event.keyCode == 13 ) {
				CreateNewComment( );
			}
		}
		
		/** Generates a new commnet and displays it on the main view. */
		export function CreateNewComment ( ) {
			
			// • • • • •	
			FreeGlobalErrorStorage( );
			HideTheKaryHorse( );
			UpdateGlobalInputVariables( );
			UpdateCommentChars( );
			
			// • • • • •
			var commentString = GenerateComment( );
			
			// • • • • •
			if ( doneSuccessfully ) {
				var result = document.createElement( 'pre' );
				result.className = CommentBoxStyleClassName;
				result.innerHTML = commentString;
				AppendElementToMainView( result );
			}

			// • • • • •
			FadeResultViews( );
			
		}
		
	//
	// ─── APPEND NEW ELEMENT TO MAIN VIEW ────────────────────────────────────────────
	//
		
		/**
		 * Appends a div element to the main view of the element and applies 
		 * the effects regarding the status of the elements in the view.
		 */
		function AppendElementToMainView ( newElement: Element ) {
			
			// • • • • •
			var viewDiv = document.getElementById( ViewDivID );
			
			// • • • • •
			if ( isLastAppendedChildErrorBox ) {
				alert( 'here' );
				viewDiv.removeChild( viewDiv.firstChild );
				isLastAppendedChildErrorBox = false;
			}
			
			// • • • • •
			if ( viewDiv.children.length == 0 ) {
				viewDiv.appendChild( newElement );
			} else {
				viewDiv.firstElementChild.classList.add( 'comment-box-deactive' );
				viewDiv.insertBefore( newElement , viewDiv.firstChild );
			}
			
			// • • • • •
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
			
			// • • • • •
			var commentString: string;
			
			// • • • • •
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
					
				case CommentStyleInSection:
					commentString = Core.GenerateInSectionComment( );
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
			
			// • • • • •
			commentString = Core.ApplyIndentation( commentString );
			
			// • • • • •
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
			
			// • • • • •
			var 	sizeBox 		= document.getElementById( SizeInputDivID );
			var 	indexBox 		= document.getElementById( IndexInputDivID );
			var 	valueBox		= document.getElementById( OneLineInputDivID );
			var 	separtorBox		= document.getElementById( SeparatorCharacterDivID );
			
			// • • • • •
			switch ( GetCommentKind( ) ) {
				case CommentStyleClass:
					sizeBox.style.display 		= displayOn;
					indexBox.style.display 		= displayOff;
					valueBox.style.display 		= displayOn;
					separtorBox.style.display 	= displayOff;
					break;
				
				case CommentStyleFlag:
					sizeBox.style.display 		= displayOff;
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
				
				case CommentStyleInSection:
					sizeBox.style.display 		= displayOff;
					indexBox.style.display 		= displayOff;
					valueBox.style.display 		= displayOn;
					separtorBox.style.display	= displayOff;
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

		/** Updates the global language setting variables based on the user input. */
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

		/** Updates the global variables once they are changed. */
		export function UpdateGlobalInputVariables ( ) {
			
			// • • • • •
			globalSeparatorValue        = GetChooseBoxValue( CommentSeparatorCharacterBox );
			globalIndentStringValue  	= GetChooseBoxValue( CommentIndentString );
			
			// • • • • •
			globalTextValue             = GetInputElementValue( CommentValueBox );
			
			// • • • • •
			globalSizeValue         	= ReadNumberInput( CommentSizeBox );
			globalIndexValue        	= ReadNumberInput( CommentIndexBox );
			globalIndentSizeValue   	= ReadNumberInput( CommentIndentSize );
			
		}

	//
	// ─── GET MODEL INFO ─────────────────────────────────────────────────────────────
	//

		/** Getts the current Command Kind from the select box of dashboard. */
		function GetCommentKind ( ) : string {
			return GetChooseBoxValue( CommentKindBox );
		}
		
	//
	// ─── GET CHOOSE BOX VALUE ───────────────────────────────────────────────────────
	//

		/** Reads the choose box value by passing an id. */
		function GetChooseBoxValue ( id: string ) {
			var chooseBox = <HTMLSelectElement> document.getElementById( id );
			return chooseBox.options[ chooseBox.selectedIndex ].value;
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
				GenerateReport( "Could not read the field: " + GetInputNameById( id ) );
				return 0;
			}
		}
		
	//
	// ─── GET INPUT ELEMENT VALUE ────────────────────────────────────────────────────
	//
	
		/** Reads the value of an HTML Input Element by ID. */
		function GetInputElementValue ( id: string ) {
			var result = ( <HTMLInputElement> document.getElementById( id ) ).value;
			    result = result.replace( '<' , '&lt;' ).replace( '>' , '&gt;' );
			return result;
		}
		
	//
	// ─── KARY LOGO HANDLERS ─────────────────────────────────────────────────────────
	//
		
		/** Hides the kary Hrose loge in the main view. */
		function HideTheKaryHorse ( ) {
			var classNames = document.getElementById( ViewDivID ).classList;
			classNames.remove( viewBoxBackgroundImageShow );
			classNames.add( viewBoxBackgroundImageHide );
		}
		
		/** Shows the kary Hrose loge in the main view. */
		function ShowTheKaryHorse ( ) {
			var classNames = document.getElementById( ViewDivID ).classList;
			classNames.remove( viewBoxBackgroundImageHide );
			classNames.add( viewBoxBackgroundImageShow );
		}
	
	//
	// ─── VIEW CLEANER ───────────────────────────────────────────────────────────────
	//	
	
		/** Removes all the commnet generated in the main view. */
		export function CleanCommentView ( ) {
			document.getElementById( ViewDivID ).innerHTML = '';
			ShowTheKaryHorse( );
		}
		
	//
	// ─── FADE EFFECT ────────────────────────────────────────────────────────────────
	//
		
		/** Generates a fade effect for the rows */
		function FadeResultViews ( ) {
			// to be completed
		}

	//
	// ─── ERROR BOX GENERATOR ─────────────────────────────────────────────────────────
	//
	
		/** Creates an HTMLPreElement with a given input string */
		export function GenerateReport ( text: string ) {
			
			// changing the error status
			doneSuccessfully = false;
			
			// generating an error box
			var errorBox = document.createElement( 'pre' );
			errorBox.className = CommentBoxStyleClassName;
			errorBox.classList.add( ErrorMessageBoxClassName );
			errorBox.innerHTML = 'OPERATION FAILURE - ' + text;
			
			// appending the error box
			AppendElementToMainView( errorBox );
			
			// changing an status:
			isLastAppendedChildErrorBox = true;
			
		}
		
	//
	// ─── FREES THE GLOBAL ERROR MESSAGE PLACES ──────────────────────────────────────
	//
		
		/** Re initilizes the global error place holders */
		function FreeGlobalErrorStorage ( ) {
			doneSuccessfully = true;
		}
		
	//
	// ─── GETS THE INPUT DESCRIPTION ─────────────────────────────────────────────────
	//
		
		/** Gets the description of the input. */
		function GetInputNameById ( id: string ): string {		
			switch ( id ) {
				case CommentIndentSize:
					return "`Indentation's Scoping Level`  [ &sect; Indentation &rightarrow; Scope ]";
				case CommentSizeBox:
					return "`Comment Lenght`  [ &sect; Preferences &rightarrow; Size ]";
				case CommentIndentSize:
					return "`Flag Comment Index`  [ &sect; Preferences &rightarrow; Index ]";
			}
		}
		
	// ────────────────────────────────────────────────────────────────────────────────
	
}