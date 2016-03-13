//
// Kary.Text Framework - Numerics Library
//    Copyright 2015-2016 Kary Foundation, Inc.
//    Author: Pouya Kary <k@karyfoundation.org>
//

/// <reference path="ui.ts" />


/* ──────────────────────────────────────────────────────────────────────────────── *
 * ::::::::: K A R Y   F R A M E W O R K   N U M E R I C S   L I B R A R Y :::::::: *
 * ──────────────────────────────────────────────────────────────────────────────── */
	
// ────────────────────────────────────────────────────────────────────────────────────────────────────	
	
	module Kary.Text.Numerics {
		
		//
		// ─── ROMAN NUMBER GENERATOR ─────────────────────────────────────────────────────
		//

			/**
			 * Generates a Roman number in by inputs in range of [0..4999]
			 */
			export function Roman ( input: number ) : string {
				// A very special case as you know...
				if ( input === 0 ) {
					return 'NULL';
				}
				
				// Also known...
				if ( input > 4999 ) {
					UI.GenerateReport( "Can not generate roman number greater than 4999" );
					return 'HUGE';
				}
				
				// Result
				let result: string = '';
				
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
				for ( let index = 0 ; index < 13 ; index++ ) {
					while ( input >= values[ index ] ) {
						input -= values[ index ];
						result += numerals[ index ];
					}
				}
				
				// done
				return result;
			}
		
		// ────────────────────────────────────────────────────────────────────────────────
		
	}

// ────────────────────────────────────────────────────────────────────────────────────────────────────