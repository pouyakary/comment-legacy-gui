//
// Comment IV 
//    Copyright 2016 Kary Foundation, Inc.
//    Author: Pouya Kary <k@karyfoundation.org>
//

/// <reference path="comment.ts" />

//
// ─── INTERFACES ─────────────────────────────────────────────────────────────────
//

	interface LanguageTemplate {
		id: string;
		name: string;
		temp: LanguageCharacters;
	}

	interface LanguageCharacters {
		ol: string;
		tl: string;
		tr: string;
		bl: string;
		br: string;
	}
	
//
// ─── LANGUAGES ──────────────────────────────────────────────────────────────────
//

	module Languages {
		export var LanguageTemplates: Array<LanguageTemplate> = [
			
			//
			// ARENDELLE
			//
			
				{ 
					'id': 'arendelle',
					'name': 'Arendelle',
					'temp': {
						'ol': '--',
						'tl': '(*',
						'tr': '* ',
						'bl': ' *',
						'br': '*)',		
					}
				},
			
			//
			// C FAMILY (C, C#, JAVA, JAVASCRIPT, ETC. )
			//			
			
				{
					'id': 'c',
					'name': 'C Family',
					'temp' : {
						'ol': '//',
						'tl': '/*',
						'tr': '* ',
						'bl': ' *',
						'br': '*/',		
					}
				},
			
			//
			// RUBY AND PYTHON
			//
			
				{
					'id': 'ruby',
					'name': 'Ruby & Python',
					'temp': {
						'ol': '#',
						'tl': '#',
						'tr': '#',
						'bl': '#',
						'br': '#',		
					}
				},
				
			//
			// APPLESCRIPT
			//
			
				{
					'id': 'applescript',
					'name': 'AppleScript',
					'temp': {
						'ol': '--',
						'tl': '--',
						'tr': '--',
						'bl': '--',
						'br': '--',		
					}
				},
				
			//
			// MAKE FILE
			//
			
				{
					'id': 'make',
					'name': 'Makefile',
					'temp': {
						'ol': '%',
						'tl': '%',
						'tr': '%',
						'bl': '%',
						'br': '%',		
					}
				},
				
			//
			// WOLFRAM LANGUAGE, MATHEMATHICA
			//
			
				{
					'id': 'mathemathica',
					'name': 'Mathemathica',
					'temp': {
						'ol': '(*',
						'tl': '(*',
						'tr': '*',
						'bl': ' *',
						'br': '*)',		
					}
				},

			//
			// ASSEMBLY
			//
			
				{
					'id': 'assembly',
					'name': 'Assembly',
					'temp': {
						'ol': ';',
						'tl': ';',
						'tr': ';',
						'bl': ';',
						'br': ';',		
					}
				},
		]	
	}
	
// ────────────────────────────────────────────────────────────────────────────────