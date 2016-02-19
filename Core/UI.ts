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
		const CommentStyleNote					= 'note';
		
	//
	// ─── ON GENERATE COMMENT ────────────────────────────────────────────────────────
	//

		/**
		 * Gives the comment style and calls the currect
		 * function to generate that kind of comment
		 * and then returns the comment as a string.
		 */
		export function OnGenerateComment ( ) : string {
			var commentString: string;
			switch ( GetCommentKind( ) ) {
				case CommentStyleClass:
					
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
			languageMultiLineBottomLeft = ( <HTMLInputElement> document.getElementById( CommentStyleMultiLineBottomLeft ) ).value;
			languageMultiLineBottomRight = ( <HTMLInputElement> document.getElementById( CommentStyleMultiLineBottomRight ) ).value;
			languageMultiLineTopLeft = ( <HTMLInputElement> document.getElementById( CommentStyleMultiLineTopLeft ) ).value;
			languageMultiLineTopRight = ( <HTMLInputElement> document.getElementById( CommentStyleMultiLineTopRight ) ).value;
			languageOneLine = ( <HTMLInputElement> document.getElementById( CommentStyleOneLine ) ).value;
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

	// ────────────────────────────────────────────────────────────────────────────────

}