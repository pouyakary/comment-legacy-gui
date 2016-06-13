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

			/**
			 * Function to generatio Kary Class Comment.
			 */
			export function GenerateClassComment ( ) : string {
				
				// Checking for possibility
				if ( !CheckCommentSizes( 5 , true , true ) ) {
					return null;
				}
				
				// First Info
				let commnet: string;
				
				// Line One
				commnet = languageMultiLineTopLeft + ' ' + MakeLine( globalSizeValue ) + ' ' + languageMultiLineTopRight + '\n';
				
				// Line Two
				const titleText = MakeTitle( globalTextValue );
				let	  inCaseOfOddNumber = '';
				let   dots = '';
				
				// • • • • •
				for ( let counter = 1; counter < ( globalSizeValue - titleText.length ) / 2 ; counter++ ) {
					dots += '&colon;';
				}
				
				// • • • • •
				if ( ( globalSizeValue - titleText.length ) % 2 == 0 ) {
					console.log( 'here');
					inCaseOfOddNumber = '&colon;';
				}
				
				// • • • • •
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

			/**
			 * Function to generate flag comemnt
			 */
			export function GenerateFlagCommet ( ) : string {
				
				// Line 1
				let comment = languageOneLine + '\n';
				
				// Line 2
				const text = MakeTitle( globalTextValue );
				comment += languageOneLine + ' ' + RepeatText( boxHorizontalCharacter , text.length + 40 ) + ' ' + Kary.Text.Numerics.Roman( globalIndexValue ) + ' ' + RepeatText( boxHorizontalCharacter , 10 ) + '\n';
				
				// Line 3
				comment += languageOneLine + '  ::::::' + text + ' : :  :   :    :     :        :          :\n';
				
				// Line 4
				comment += languageOneLine + ' ' + RepeatText( boxHorizontalCharacter , 50 + text.length ) + '\n';
				
				// Line 5
				comment += languageOneLine
				
				// Done
				return comment;
			}

		//
		// ─── LINE GENERATOR ─────────────────────────────────────────────────────────────
		//

			/**
			 * Function to generate Line Comment
			 */
			export function GenerateLineComment ( ) : string {
				return languageOneLine + ' ' + RepeatText( boxHorizontalCharacter , globalSizeValue );
			}
			
		//
		// ─── SUBLINE COMMENT GENERATOR ──────────────────────────────────────────────────
		//

			/**
			 * Function to generate Subline Comment
			 */
			export function GenerateSubLineComment ( ) : string {
				// Checking for possibility
				if ( !CheckCommentSizes( 4 , false , false ) ) {
					return null;
				}
				// Generating the comment
				let comment = languageOneLine;
				if ( globalSizeValue % 2 == 0 ) {
					comment += ' ';
				}
				comment += RepeatText ( ' -' , globalSizeValue / 2 );
				return comment;
			}
			
		//
		// ─── SECTION COMMENT GENERATOR ──────────────────────────────────────────────────
		//

			/**
			 * Function to generate Section Comment
			 */
			export function GenerateSectionComment (  ) : string {
				
				// Checking for possibility
				if ( !CheckCommentSizes( 8 , false , true ) ) {
					return null;
				}

				// Line 1
				let comment = languageOneLine + '\n';
				
				// Line 2
				comment += (
					languageOneLine + ' ' + RepeatText( boxHorizontalCharacter , 3 ) + ' ' +
					globalTextValue.toUpperCase( ) + ' ' + RepeatText( boxHorizontalCharacter , globalSizeValue - globalTextValue.length - 5 ) + '\n'
				);
				
				// Line 3
				comment += languageOneLine;
				
				// Done
				return comment;	
			}
			
		//
		// ─── SUBSECTION COMMENT GENERATOR ───────────────────────────────────────────────
		//
		
			/**
			 * Comment to generate Subsection Comment
			 */
			export function GenerateSubSectionComment (  ) : string {
				
				// Checking for possibility
				if ( !CheckCommentSizes( 6 , false , true ) ) {
					return null;
				}

				// Line 1
				let comment = languageOneLine + '\n';
				
				// Line 2
				comment += languageOneLine + ' ' + '- -' + ' ' + globalTextValue.toLowerCase( );
				let lineSize = ( globalSizeValue - globalTextValue.length - 5 ) / 2;
				if ( lineSize % 2 == 0 ) {
					comment += ' ' + RepeatText( ' -' , lineSize ) + '\n'; 
				} else {
					comment += RepeatText( ' -' , lineSize ) + '\n';
				}
				
				// Line 3
				comment += languageOneLine;
				
				// Done
				return comment;	
			}
			
		//
		// ─── IS SECTION COMMENT GENERATOR ───────────────────────────────────────────────
		//

			/**
			 * Function to generate Insection Comment
			 */
			export function GenerateInSectionComment ( ) : string {
				// Generating the comment
				let comment =  languageOneLine + '\n';
				comment += languageOneLine + ' ' + globalTextValue.toUpperCase( ) + '\n';
				comment += languageOneLine;
				return comment;
			}
			
		//
		// ─── SEPARATOR COMMENT GENERATOR ────────────────────────────────────────────────
		//
		
			/**
			 * Function to generate Separate Comment
			 */
			export function GenerateSeparatorComment ( ) : string {
				// Generating the comment
				return '//' + RepeatText( ' ' + globalSeparatorValue , 5 );
			}

		// ────────────────────────────────────────────────────────────────────────────────
		
			/**
			 * Function that generates line with given size.
			 */
			function MakeLine ( size: number ) : string {
				return RepeatText( boxHorizontalCharacter , size );
			}

		// ────────────────────────────────────────────────────────────────────────────────
		
			/**
			 * Transefrs a text like 'title' to 'T I T L E '
			 */
			function MakeTitle ( text: string ) {
				let result = '';
				for ( let index = 0 ; index < text.length ; index++ ) {
					result += ' ' + text[ index ];
				}
				return result.toUpperCase( );			
			}
			
		// ────────────────────────────────────────────────────────────────────────────────
			
			/** 
			 * Repeats a text with given times (used to create lines...)
			 */
			function RepeatText ( character: string , size: number ) : string {
				let text = '';
				for ( let counter = 0 ; counter < size ; counter++ ) {
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
				let lines: Array<string>;
				try {
					lines = comment.split( '\n' );
				} catch ( err ) {
					lines = [ comment ];
				}
				
				// • • • • •
				let result = '';
				const countOfLines = lines.length;
				
				// • • • • •
				for ( let couter = 0 ; couter < countOfLines ; couter++ ) {
					result += RepeatText( globalIndentStringValue , globalIndentSizeValue ) + lines[ couter ];
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
					let textLength = 0;
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

