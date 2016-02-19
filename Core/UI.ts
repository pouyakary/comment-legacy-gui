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
		const OneLineInputDivID = "one-line-value-div";
		const SizeInputDivID 	= "size-value-div";
		const IndexInputDivID 	= "index-value-div";
		
		// Input Box IDs
		const CommentKindBox 	= "commentformatbox";
		const CommentValueBox 	= "cp-value";
		const CommentSizeBox	= "cp-size";
		const CommentIndexBox 	= "cp-index";
		
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

		export function UpdateCommentChars ( ) {
			var element = <HTMLInputElement> document.getElementById( CommentStyleMultiLineBottomLeft );
			languageMultiLineBottomLeft = element.value;
			
			element = <HTMLInputElement> document.getElementById( CommentStyleMultiLineBottomRight );
			languageMultiLineBottomRight = element.value;
			
			element = <HTMLInputElement> document.getElementById( CommentStyleMultiLineTopLeft );
			languageMultiLineTopLeft = element.value;
			
			element = <HTMLInputElement> document.getElementById( CommentStyleMultiLineTopRight );
			languageMultiLineTopRight = element.value;
			
			element = <HTMLInputElement> document.getElementById( CommentStyleOneLine );
			languageOneLine = element.value;
		}

	//
	// ─── GET MODEL INFO ─────────────────────────────────────────────────────────────
	//

		function GetCommentKind ( ) : string {
			var styleBox = <HTMLSelectElement> document.getElementById( CommentKindBox );
			return styleBox.options[ styleBox.selectedIndex ].value;
		}

	// ────────────────────────────────────────────────────────────────────────────────

}