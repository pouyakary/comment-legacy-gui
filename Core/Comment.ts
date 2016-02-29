//
// Comment IV 
//    Copyright 2016 Kary Foundation, Inc.
//    Author: Pouya Kary <k@karyfoundation.org>
//

/// <reference path="kf.text.numerics.ts" />


//
// ──────────────────────────────────────────────────────────────────────── I ──────────
//  :::::: S H A R E D   V A R I A B L E S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────
//

// ────────────────────────────────────────────────────────────────────────────────────────────────────

	//
	// ─── LANGUAGE SETTINGS ──────────────────────────────────────────────────────────
	//

		var languageMultiLineTopLeft: 		string;
		var languageMultiLineTopRight: 		string;
		var languageMultiLineBottomLeft: 	string;
		var languageMultiLineBottomRight: 	string;
		var languageOneLine: 				string;
		
	//
	// ─── INPUTS ─────────────────────────────────────────────────────────────────────
	//
	
		var globalTextValue: 				string;
		var globalSeparatorValue:			string;
		var globalSizeValue: 				number;
		var globalIndexValue: 				number;
		var globalIndentSizeValue: 			number;
		var globalIndentStringValue: 		string;
		
	//
	// ─── SHARED SYSTEM RESOURCES ────────────────────────────────────────────────────
	//

		var isLastAppendedChildErrorBox     = false;
		var doneSuccessfully: 				boolean;
		
	// ────────────────────────────────────────────────────────────────────────────────

// ────────────────────────────────────────────────────────────────────────────────────────────────────





//
// ──────────────────────────────────────────────────────────────────── II ──────────
//  :::::: C O R E   N A M E S P A C E : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────
//

// ────────────────────────────────────────────────────────────────────────────────────────────────────

	module Core {
		
		//
		// ─── SPECIAL CHARACTERS ─────────────────────────────────────────────────────────
		//

			const boxVerticalCharacter 		= '&boxv;';
			const boxHorizontalCharacter 	= '&boxh;';
			const boxTopLeftCharacter 		= '&boxdr;';
			const boxTopRightCharacter 		= '&boxdl;';
			const boxBottomLeftCharacter 	= '&boxur;';
			const boxBottomRightCharacter	= '&boxul;';
			
		//
		// ─── COMMENT CLASS GENERATOR ────────────────────────────────────────────────────
		//

			export function GenerateClassComment ( ) : string {
				
				// Checking for possibility
				if ( !CheckCommentSizes( 5 , true , true ) ) {
					return null;
				}
				
				// First Info
				var commnet: string;
				
				// Line One
				commnet = languageMultiLineTopLeft + ' ' + MakeLine( globalSizeValue ) + ' ' + languageMultiLineTopRight + '\n';
				
				// Line Two
				const titleText = MakeTitle( globalTextValue );
				var	  inCaseOfOddNumber = '';
				var   dots = '';
				
				for ( var counter = 1; counter < ( globalSizeValue - titleText.length ) / 2 ; counter++ ) {
					dots += '&colon;';
				}
				
				if ( ( globalSizeValue - titleText.length ) % 2 == 0 ) {
					console.log( 'here');
					inCaseOfOddNumber = '&colon;';
				}
				
				commnet += languageMultiLineBottomLeft + ' ' + inCaseOfOddNumber + dots + titleText + ' ' + dots + ' ' + languageMultiLineTopRight + '\n' ;
				
				// Line Tree
				commnet += languageMultiLineBottomLeft + ' ' + MakeLine( globalSizeValue ) + ' ' + languageMultiLineBottomRight;
				
				// Done!
				console.log( commnet );
				return commnet;
			}
			
		//
		// ─── FLAG COMMENT GENERATOR ─────────────────────────────────────────────────────
		//

			export function GenerateFlagCommet ( ) : string {
				
				// Line 1
				var comment = languageOneLine + '\n';
				// Line 2
				const text = MakeTitle( globalTextValue );
				comment += languageOneLine + ' ' + MakeRepeat( boxHorizontalCharacter , text.length + 40 ) + ' ' + Kary.Text.Numerics.Roman( globalIndexValue ) + ' ' + MakeRepeat( boxHorizontalCharacter , 10 ) + '\n';
				// Line 3
				comment += languageOneLine + '  ::::::' + text + ' : :  :   :    :     :        :          :\n';
				// Line 4
				comment += languageOneLine + ' ' + MakeRepeat( boxHorizontalCharacter , 50 + text.length ) + '\n';
				// Line 5
				comment += languageOneLine
				// Done
				return comment;
			}

		//
		// ─── LINE GENERATOR ─────────────────────────────────────────────────────────────
		//

			export function GenerateLineComment ( ) : string {
				return languageOneLine + ' ' + MakeRepeat( boxHorizontalCharacter , globalSizeValue );
			}
			
		//
		// ─── SUBLINE COMMENT GENERATOR ──────────────────────────────────────────────────
		//

			export function GenerateSubLineComment ( ) : string {
				// Checking for possibility
				if ( !CheckCommentSizes( 4 , false , false ) ) {
					return null;
				}
				// Generating the comment
				var comment = languageOneLine;
				if ( globalSizeValue % 2 == 0 ) {
					comment += ' ';
				}
				comment += MakeRepeat ( ' -' , globalSizeValue / 2 );
				return comment;
			}
			
		//
		// ─── SECTION COMMENT GENERATOR ──────────────────────────────────────────────────
		//

			export function GenerateSectionComment (  ) : string {
				
				// Checking for possibility
				if ( !CheckCommentSizes( 8 , false , true ) ) {
					return null;
				}

				// Line 1
				var comment = languageOneLine + '\n';
				
				// Line 2
				comment += (
					languageOneLine + ' ' + MakeRepeat( boxHorizontalCharacter , 3 ) + ' ' +
					globalTextValue.toUpperCase( ) + ' ' + MakeRepeat( boxHorizontalCharacter , globalSizeValue - globalTextValue.length - 5 ) + '\n'
				);
				
				// Line 3
				comment += languageOneLine;
				
				// Done
				return comment;	
			}
			
		//
		// ─── SUBSECTION COMMENT GENERATOR ───────────────────────────────────────────────
		//
		
			export function GenerateSubSectionComment (  ) : string {
				
				// Checking for possibility
				if ( !CheckCommentSizes( 6 , false , true ) ) {
					return null;
				}

				// Line 1
				var comment = languageOneLine + '\n';
				
				// Line 2
				comment += languageOneLine + ' ' + '- -' + ' ' + globalTextValue.toLowerCase( );
				var lineSize = ( globalSizeValue - globalTextValue.length - 5 ) / 2;
				if ( lineSize % 2 == 0 ) {
					comment += ' ' + MakeRepeat( ' -' , lineSize ) + '\n'; 
				} else {
					comment += MakeRepeat( ' -' , lineSize ) + '\n';
				}
				
				// Line 3
				comment += languageOneLine;
				
				// Done
				return comment;	
			}
			
		//
		// ─── IS SECTION COMMENT GENERATOR ───────────────────────────────────────────────
		//

			export function GenerateInSectionComment ( ) : string {
				// Generating the comment
				var comment =  languageOneLine + '\n';
				comment += languageOneLine + ' ' + globalTextValue.toUpperCase( ) + '\n';
				comment += languageOneLine;
				return comment;
			}
			
		//
		// ─── SEPARATOR COMMENT GENERATOR ────────────────────────────────────────────────
		//
		
			export function GenerateSeparatorComment ( ) : string {
				// Generating the comment
				return '//' + MakeRepeat( ' ' + globalSeparatorValue , 5 );
			}

		// ────────────────────────────────────────────────────────────────────────────────
		
			function MakeLine ( size: number ) : string {
				return MakeRepeat( boxHorizontalCharacter , size );
			}

		// ────────────────────────────────────────────────────────────────────────────────
		
			function MakeTitle ( text: string ) {
				var result = '';
				for ( var index = 0 ; index < text.length ; index++ ) {
					result += ' ' + text[ index ];
				}
				return result.toUpperCase( );			
			}
			
		// ────────────────────────────────────────────────────────────────────────────────
			
			function MakeRepeat ( character: string , size: number ) : string {
				var text = '';
				for ( var counter = 0 ; counter < size ; counter++ ) {
					text += character;
				}
				return text;
			}
			
		//
		// ─── COMMENT INDENT APPLIER ─────────────────────────────────────────────────────
		//
			
			/** 
			 * Applies indentation on the comments
			 */
			export function ApplyIndentation ( comment: string ) : string {
				
				// • • • • •
				var lines: Array<string>;
				try {
					lines = comment.split( '\n' );
				} catch ( err ) {
					lines = [ comment ];
				}
				
				// • • • • •
				var result = '';
				let countOfLines = lines.length;
				
				// • • • • •
				for ( var couter = 0 ; couter < countOfLines ; couter++ ) {
					result += MakeRepeat( globalIndentStringValue , globalIndentSizeValue ) + lines[ couter ];
					if ( couter < countOfLines - 1 ) {
						result += '\n';
					}
				}
				
				// • • • • •
				return result;
				
			}

		//
		// ─── COMMENT SIZE CHECKER ───────────────────────────────────────────────────────
		//
					
			/** Checks to see if the size of the comment is right */
			function CheckCommentSizes ( minStaticTextLenght: number , titeled: boolean , countTextSize: boolean ): boolean {
				if ( minStaticTextLenght > globalSizeValue ) {
					UI.GenerateReport( "Given size for the comment is too short." );
					return false;
				} else {
					var textLength = 0
					if ( countTextSize ) {
						textLength = globalTextValue.length;
						if ( titeled ) { 
							textLength *= 2;
						}
					}
					if ( globalSizeValue - textLength < minStaticTextLenght ) {
						UI.GenerateReport( "Faild to generate the comment" );
						return false;
					}
				}
				return true;
			}
			
		// ────────────────────────────────────────────────────────────────────────────────
		
	}

// ────────────────────────────────────────────────────────────────────────────────────────────────────

