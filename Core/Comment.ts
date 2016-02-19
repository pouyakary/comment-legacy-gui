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
			var commnet: string = 'Hello World';
			
			return commnet;
		}

	// ────────────────────────────────────────────────────────────────────────────────

}