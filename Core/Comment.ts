//
// Comment IV 
//    Copyright 2016 Kary Foundation, Inc.
//    Author: Pouya Kary <k@karyfoundation.org>
//

var languageMultiLineTopLeft: string;
var languageMultiLineTopRight: string;
var languageMultiLineBottomLeft: string;
var languageMultiLineBottomRight: string;
var languageOneLine: string;

var globalTextValue: string;
var globalSeparatorCharacterValue: string;
var globalSizeValue: number;
var globalIndexValue: number;

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
			comment += languageOneLine + ' ' + MakeRepeat( boxHorizontalCharacter , text.length + 40 ) + ' ' + globalIndexValue + ' ' + MakeRepeat( boxHorizontalCharacter , 10 ) + '\n';
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
	// ─── SEPARATOR COMMENT GENERATOR ────────────────────────────────────────────────
	//
	
		export function GenerateSeparatorComment ( ) : string {
			return '//' + MakeRepeat( ' ' + globalSeparatorCharacterValue , 5 );
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
		
	// ────────────────────────────────────────────────────────────────────────────────
}