//
// Comment IV 
//    Copyright 2016 Kary Foundation, Inc.
//    Author: Pouya Kary <k@karyfoundation.org>
//

/// <reference path="comment.ts" />

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

module Languages {
	export var LanguageTemplates: Array<LanguageTemplate> = [
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
		{
			'id': 'ruby',
			'name': 'Ruby Like',
			'temp': {
				'ol': '#',
				'tl': '#',
				'tr': '#',
				'bl': '#',
				'br': '#',		
			}
		},
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
	]	
}