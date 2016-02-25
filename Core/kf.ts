/* ──────────────────────────────────────────────────────────────────────────────── *
 * :::::::::::::::::::::: T H E   K A R Y   F R A M E W O R K ::::::::::::::::::::: *
 * ──────────────────────────────────────────────────────────────────────────────── */

module Kary.Text.Numerics {
	export function Roman ( input: number ) : string {
		// A very special case as you know...
		if ( input === 0 ) {
			return 'NULL';
		}
		
		// Result
		var result: string = '';
		
		// Values:
		const values: Array<number> = [ 
			1000 , 900 , 500 , 400 , 100 , 90 , 
			50 , 40 , 10 , 9 , 5 , 4 , 1 
		];
		const numerals: Array<string> = [ 
			"M" , "CM" , "D" , "CD" , "C" , "XC" , "L" , 
			"XL" , "X" , "IX" , "V" , "IV" , "I" 
		];
		
		// Generator 
		for ( var index = 0 ; index < 13 ; index++ ) {
			while ( input >= values[ index ] ) {
				input -= values[ index ];
				result += numerals[ index ];
			}
		}
		
		// done
		return result;
	}
}