//
// Comment IV 
//    Copyright 2016 Kary Foundation, Inc.
//    Author: Pouya Kary <k@karyfoundation.org>
//

/// <reference path="comment.ts" />
/// <reference path="electron.d.ts" />
/// <reference path="languages.ts" />

module UI {

	//
	// ─── INFO ───────────────────────────────────────────────────────────────────────
	//
		
		// Main Version
		const CommentVersion					= 'IV.5.168';

		// Input Divs
		const OneLineInputDivID 				= "one-line-value-div";
		const SizeInputDivID 					= "size-value-div";
		const IndexInputDivID 					= "index-value-div";
		const SeparatorCharacterDivID			= "separator-value-div";
		
		// Input Box IDs
		const CommentKindBox 					= "commentformatbox";
		const CommentValueBox 					= "cp-value";
		const CommentSizeBox					= "cp-size";
		const CommentIndexBox 					= "cp-index";
		const CommentSeparatorCharacterBox		= "cp-separator";
		
		// Language Settings
		const CommentStyleOptionSelectBox 		= 'language-template';
		const CommentStyleCustomInputBox		= 'custom-language-inputs';
		const CommentStyleSelectedTemplate 		= 'starting-selected-item';
		const CommentStyleMultiLineTopLeft 		= 'cs-top-left';
		const CommentStyleMultiLineTopRight 	= 'cs-top-right';
		const CommentStyleMultiLineBottomLeft 	= 'cs-bottom-left';
		const CommentStyleMultiLineBottomRight 	= 'cs-bottom-right';
		const CommentStyleOneLine				= 'cs-one-line';
		
		// Indentation
		const CommentIndentString               = 'ci-string';
		const CommentIndentSize	                = 'ci-size';
		
		// Comment Sytle Values
		const CommentStyleClass					= 'class';
		const CommentStyleFlag					= 'flag';
		const CommentStyleSection				= 'section';
		const CommentStyleSubSection			= 'subsection';
		const CommentStyleInSection				= 'insection';
		const CommentStyleLine					= 'line';
		const CommentStyleSubLine				= 'subline';
		const CommentStyleNote					= 'note';
		const CommentStyleSeparator 			= 'separator';
		
		// Generating Settings
		const ViewDivID							= 'view';
		const CommentBoxStyleClassName 			= 'comment-box';
		const TheKaryHorseDivID 				= 'kary-horse-back';
		const ErrorMessageBoxClassName			= 'error-box';
		
		// Constant Settings
		const displayOn 						= 'inline';
		const displayOff  						= 'none';	
		const viewBoxBackgroundImageHide		= 'kary-horse-back-hide';
		const viewBoxBackgroundImageShow		= 'kary-horse-back-show';
		
		// About Page
		const AboutPageBoxId					= 'about-page';
		const AboutPageVersionBox				= 'about-version-box';
		
		// Local Storage Identifiers
		var lastGeneratedCommentText			= '';
		

	//
	// ─── THIS RUNS AT LOAD TIME ─────────────────────────────────────────────────────
	//

		/** Inits the software on load. */
		export function InitOnLoad ( ) {
			CloseAboutPage( );
			LoadSettings( );
			LoadLanguageTemplateBoxes( );
			InitVersionBoxContent( );
			UpdateCommentChars( );
			DisplayInputBoxes( );
		}
		
	//
	// ─── INIT VERSION INFO ──────────────────────────────────────────────────────────
	//
		
		function InitVersionBoxContent ( ) {
			document.getElementById( AboutPageVersionBox ).innerText = CommentVersion;
		}
		
	//
	// ─── ABOUT PAGE HANDLERS ────────────────────────────────────────────────────────
	//
		
		export function OpenAboutPage ( ) {
			document.getElementById( AboutPageBoxId ).style.display = 'block';
		}
		
	// ────────────────────────────────────────────────────────────────────────────────
		
		export function CloseAboutPage ( ) {
			document.getElementById( AboutPageBoxId ).style.display = 'none';
		}
		
	//
	// ─── GENERATE COMMENT HTML ──────────────────────────────────────────────────────
	//
	
		function GenerateCommentHTMLCode ( ): string {
			try {
				FreeGlobalErrorStorage( );
				HideTheKaryHorse( );
				UpdateGlobalInputVariables( );
				UpdateCommentChars( );
				return GenerateComment( );
			} catch ( err ) {
				return null;
			}
		}
		
	//
	// ─── HTML GENERATE AND COPY ─────────────────────────────────────────────────────
	//
		
		export function CopyHTMLCode ( ) {
			let commentString = GenerateCommentHTMLCode( );
			if ( commentString != null )
				ElectronCopy( GenerateComment( ) );
		}
		
	//
	// ─── LOCAL STORAGE SYSTEM ───────────────────────────────────────────────────────
	//
		
		/** Interface of Local Storage for the Comment IV */
		module C4LocalStorage {
			const localStorageIdentifer	= 'org.karyfoundation.comment-iv.';
			
			/** Stores data in the localStorage as the Comment IV.  */
			export function Store ( key: string , data: any ) {
				localStorage.setItem( localStorageIdentifer + key , data );
			}
			
			/** Loads the Comment IV's data from the storage. */
			export function Load ( key: string ) : any {
				return localStorage.getItem( localStorageIdentifer + key );
			}
		}
		
	//
	// ─── LOAD SETTINGS ──────────────────────────────────────────────────────────────
	//
		
		/** Loads the settings from localStorage and sets them to their values */
		function LoadSettings ( ) {
			LoadSelectBoxValues( );
			LoadInputBoxValues( );
		}

	//
	// ─── CURRENT COMMENT SETTING LOADER ─────────────────────────────────────────────
	//
		
		/** Loads the current comment setting. */
		function LoadSelectBoxSettingById ( selectBoxID: string ) {
			SetChooseBoxSelection( 
				selectBoxID,
				C4LocalStorage.Load( selectBoxID )
			);
		}
	
	//
	// ─── LOAD SELECT BOX VALUES ─────────────────────────────────────────────────────
	//
		
		/** Loads the selectBoxes */
		function LoadSelectBoxValues ( ) {
			LoadSelectBoxSettingById( CommentKindBox );
			LoadSelectBoxSettingById( CommentSeparatorCharacterBox );	
		}
	
	//
	// ─── LOAD INPUT BOXES ───────────────────────────────────────────────────────────
	//
		
		function LoadInputBoxValues ( ) {
			// • • • • •
			LoadCommentChars( );
			// • • • • •
			LoadInputBoxFromLocalStorageById( CommentValueBox );
			LoadInputBoxFromLocalStorageById( CommentSizeBox );
			LoadInputBoxFromLocalStorageById( CommentIndentSize );
			LoadInputBoxFromLocalStorageById( CommentIndentString );
			LoadInputBoxFromLocalStorageById( CommentIndentSize );
		}
		
	//
	// ─── COMMENT STORER ─────────────────────────────────────────────────────────────
	//
		
		export function UpdateAndStoreCommentCharacters ( ) {
			// • • • • •
			StoreInputBoxById( CommentStyleMultiLineBottomLeft );
			StoreInputBoxById( CommentStyleMultiLineBottomRight );
			StoreInputBoxById( CommentStyleMultiLineTopLeft );
			StoreInputBoxById( CommentStyleMultiLineTopRight );
			StoreInputBoxById( CommentStyleOneLine );
		}
		
		function StoreInputBoxById ( id: string ) {
			C4LocalStorage.Store( 
				id, ( <HTMLInputElement> document.getElementById ( id ) ).value 
			);
		}
		
	//
	// ─── CHARACTER UPDATE AND STORER ────────────────────────────────────────────────
	//
		
		function LoadCommentChars ( ) {
			LoadInputBoxFromLocalStorageById( CommentStyleMultiLineBottomLeft );
			LoadInputBoxFromLocalStorageById( CommentStyleMultiLineBottomRight );
			LoadInputBoxFromLocalStorageById( CommentStyleMultiLineTopLeft );
			LoadInputBoxFromLocalStorageById( CommentStyleMultiLineTopRight );
			LoadInputBoxFromLocalStorageById( CommentStyleOneLine );
			UpdateCommentChars( );
		}
		
	//
	// ─── INPUT BOX VALUE LOADER ─────────────────────────────────────────────────────
	//
		
		/** Loads the value of an input box */
		function LoadInputBoxFromLocalStorageById ( id: string ) {
			const localStorageValue = C4LocalStorage.Load( id );
			if ( localStorageValue != undefined && localStorageValue != null ) {
				let inputBox = <HTMLInputElement> document.getElementById( id );
				inputBox.value = localStorageValue;
			}		
		}

	//
	// ─── ON ADD COMMENT ─────────────────────────────────────────────────────────────
	//
	
		/**
		 * On the event of keypress if the key be the enter it 
		 * will generate a new comment
		 */
		export function OnTextInputKeyPress ( event: KeyboardEvent ) {
			if ( event.keyCode == 13 ) {
				CreateNewComment( );
			}
		}
		
		/** Generates a new commnet and displays it on the main view. */
		export function CreateNewComment ( ) {
	
			// • • • • •
			let commentString = GenerateCommentHTMLCode( );
			if ( commentString == null ) return 0;
			
			// • • • • •
			if ( doneSuccessfully ) {
				let result = document.createElement( 'pre' );
				result.className = CommentBoxStyleClassName;
				result.innerHTML = commentString;
				
				lastGeneratedCommentText = result.innerText;
				
				AppendElementToMainView( result );
				CopyComment( );
			}

			// • • • • •
			FadeResultViews( );
			
		}
		
	//
	// ─── COPY COMMENT TOOL ──────────────────────────────────────────────────────────
	//
		
		export function CopyComment ( ) {
			if ( lastGeneratedCommentText !== '' ) {
				ElectronCopy( lastGeneratedCommentText );
			}
		}
		
	//
	// ─── APPEND NEW ELEMENT TO MAIN VIEW ────────────────────────────────────────────
	//
		
		/**
		 * Appends a div element to the main view of the element and applies 
		 * the effects regarding the status of the elements in the view.
		 */
		function AppendElementToMainView ( newElement: Element ) {
			
			// • • • • •
			let viewDiv = document.getElementById( ViewDivID );
			
			// • • • • •
			if ( isLastAppendedChildErrorBox ) {
				viewDiv.removeChild( viewDiv.firstChild );
				isLastAppendedChildErrorBox = false;
			}
			
			// • • • • •
			if ( viewDiv.children.length == 0 ) {
				viewDiv.appendChild( newElement );
			} else {
				viewDiv.firstElementChild.classList.add( 'comment-box-deactive' );
				viewDiv.insertBefore( newElement , viewDiv.firstChild );
			}
			
			// • • • • •
			if ( viewDiv.children.length > 10 ) {
				viewDiv.removeChild( viewDiv.lastChild );
			}
		}

	//
	// ─── ON GENERATE COMMENT ────────────────────────────────────────────────────────
	//

		/**
		 * Gives the comment style and calls the currect
		 * function to generate that kind of comment
		 * and then returns the comment as a string.
		 */
		function GenerateComment ( ) : string {	
			
			// • • • • •
			let commentString: string;
			
			// • • • • •
			switch ( GetCommentKind( ) ) {
				case CommentStyleClass:
					commentString = Core.GenerateClassComment( );
					break;
				
				case CommentStyleFlag:
					commentString = Core.GenerateFlagCommet( );
					break;
				
				case CommentStyleSection: 
					commentString = Core.GenerateSectionComment( );
					break;
					
				case CommentStyleSubSection:
					commentString = Core.GenerateSubSectionComment( );
					break;
					
				case CommentStyleInSection:
					commentString = Core.GenerateInSectionComment( );
					break;
					
				case CommentStyleLine:
					commentString = Core.GenerateLineComment( );
					break;
				
				case CommentStyleSubLine:
					commentString = Core.GenerateSubLineComment( );
					break;
					
				case CommentStyleSeparator:
					commentString = Core.GenerateSeparatorComment( );
					break;
			}
			
			// • • • • •
			commentString = Core.ApplyIndentation( commentString );
			
			// • • • • •
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
		export function DisplayInputBoxes (  ) {
			
			// • • • • •
			StoreSelectBoxById( CommentKindBox );
			
			// • • • • •
			let 	sizeBox 		= document.getElementById( SizeInputDivID );
			let 	indexBox 		= document.getElementById( IndexInputDivID );
			let 	valueBox		= document.getElementById( OneLineInputDivID );
			let 	separtorBox		= document.getElementById( SeparatorCharacterDivID );
			
			// • • • • •
			switch ( GetCommentKind( ) ) {
				case CommentStyleClass:
					sizeBox.style.display 		= displayOn;
					indexBox.style.display 		= displayOff;
					valueBox.style.display 		= displayOn;
					separtorBox.style.display 	= displayOff;
					break;
				
				case CommentStyleFlag:
					sizeBox.style.display 		= displayOff;
					indexBox.style.display 		= displayOn;
					valueBox.style.display 		= displayOn;
					separtorBox.style.display 	= displayOff;
					break;
					
				case CommentStyleSection:
					sizeBox.style.display 		= displayOn;
					indexBox.style.display	 	= displayOff;
					valueBox.style.display 		= displayOn;
					separtorBox.style.display	= displayOff;
					break;
				
				case CommentStyleSubSection:
					sizeBox.style.display 		= displayOn;
					indexBox.style.display 		= displayOff;
					valueBox.style.display 		= displayOn;
					separtorBox.style.display	= displayOff;
					break;
					
				case CommentStyleLine:
					sizeBox.style.display 		= displayOn;
					indexBox.style.display 		= displayOff;
					valueBox.style.display 		= displayOff;
					separtorBox.style.display	= displayOff;
					break;
					
				case CommentStyleSubLine:
					sizeBox.style.display 		= displayOn;
					indexBox.style.display 		= displayOff;
					valueBox.style.display 		= displayOff;
					separtorBox.style.display	= displayOff;
					break;
					
				case CommentStyleSeparator:
					sizeBox.style.display 		= displayOff;
					indexBox.style.display 		= displayOff;
					valueBox.style.display 		= displayOff;
					separtorBox.style.display	= displayOn;
					break;
				
				case CommentStyleInSection:
					sizeBox.style.display 		= displayOff;
					indexBox.style.display 		= displayOff;
					valueBox.style.display 		= displayOn;
					separtorBox.style.display	= displayOff;
					break;
					
				case CommentStyleNote:
					sizeBox.style.display 		= displayOff;
					indexBox.style.display 		= displayOff;
					valueBox.style.display 		= displayOff;
					separtorBox.style.display	= displayOff;
					break;
			}
		}
		
	//
	// ─── STORE CURRENT COMMENT SETTING ──────────────────────────────────────────────
	//
		
		/** Stores the current comment setting. */
		function StoreSelectBoxById ( id: string ) {
			C4LocalStorage.Store( 
				id,
				GetSelectBoxValueById( id ) 
			);
		}
		
	//
	// ─── UPDATE COMMENT CHARS ───────────────────────────────────────────────────────
	//

		/** Updates the global language setting variables based on the user input. */
		export function UpdateCommentChars ( ) {
			languageMultiLineBottomLeft 	= UpdateCommentCharParameter( CommentStyleMultiLineBottomLeft );
			languageMultiLineBottomRight 	= UpdateCommentCharParameter( CommentStyleMultiLineBottomRight );
			languageMultiLineTopLeft 		= UpdateCommentCharParameter( CommentStyleMultiLineTopLeft );
			languageMultiLineTopRight 		= UpdateCommentCharParameter( CommentStyleMultiLineTopRight );
			languageOneLine 				= UpdateCommentCharParameter( CommentStyleOneLine );
		}

	//
	// ─── UPDATES DATAS ──────────────────────────────────────────────────────────────
	//
		
		/** Gets the box value as well as setting the new value to the database */
		function UpdateCommentCharParameter ( styleID: string ) : string {
			const value = GetInputElementValue( styleID );
			C4LocalStorage.Store( styleID , value );
			return value;
		}
	
	//
	// ─── UPDATE GLOBAL VARIABLE INFOS ───────────────────────────────────────────────
	//

		/** Updates the global variables once they are changed. */
		export function UpdateGlobalInputVariables ( ) {
			
			// • • • • •
			globalSeparatorValue        = GetSelectBoxValueById( CommentSeparatorCharacterBox );
			globalIndentStringValue  	= GetSelectBoxValueById( CommentIndentString );
			
			// • • • • •
			globalTextValue             = GetInputElementValue( CommentValueBox );
			
			// • • • • •
			try {
				globalSizeValue         = ReadNumberInput( CommentSizeBox );
				globalIndexValue        = ReadNumberInput( CommentIndexBox );
				globalIndentSizeValue   = ReadNumberInput( CommentIndentSize );
			} catch ( err ) {
				throw 0;
			}
		}

	//
	// ─── GET MODEL INFO ─────────────────────────────────────────────────────────────
	//

		/** Getts the current Command Kind from the select box of dashboard. */
		function GetCommentKind ( ) : string {
			return GetSelectBoxValueById( CommentKindBox );
		}
		
	//
	// ─── GET CHOOSE BOX VALUE ───────────────────────────────────────────────────────
	//

		/** Reads the choose box value by passing an id. */
		function GetSelectBoxValueById ( id: string ) {
			const chooseBox = <HTMLSelectElement> document.getElementById( id );
			return ( <HTMLSelectElement> chooseBox.options[ chooseBox.selectedIndex ]).value;
		}
		
	//
	// ─── CHANGES THE SELECTED BOX ITEM ──────────────────────────────────────────────
	//	
		
		/** Changes the a select box's item to the given value */
		function SetChooseBoxSelection ( selectBoxID: string , toBeSelectedItemValue: string ) {
			let selectBox = <HTMLSelectElement> document.getElementById( selectBoxID );
			for ( let index = 0; index < selectBox.children.length; index++ ) {
				const element = ( <HTMLSelectElement> selectBox.options[ index ]).value;
				if ( element == toBeSelectedItemValue ) {
					selectBox.selectedIndex = index;
					return;
				}
			}
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
			const value = ( <HTMLInputElement> ( document.getElementById( id ) ) ).value;
			if ( value.match( /^\d+$/ ) ) {
				return parseInt ( value )
			} else {
				GenerateReport( "Could not read the field: " + GetInputNameById( id ) );
				throw 0;
			}
		}
		
	//
	// ─── GET INPUT ELEMENT VALUE ────────────────────────────────────────────────────
	//
	
		/** Reads the value of an HTML Input Element by ID. */
		function GetInputElementValue ( id: string ) {
			let result = ( <HTMLInputElement> document.getElementById( id ) ).value;
			    result = result.replace( '<' , '&lt;' ).replace( '>' , '&gt;' );
			return result;
		}
		
	//
	// ─── KARY LOGO HANDLERS ─────────────────────────────────────────────────────────
	//
		
		/** Hides the kary Hrose loge in the main view. */
		function HideTheKaryHorse ( ) {
			let classNames = document.getElementById( ViewDivID ).classList;
			classNames.remove( viewBoxBackgroundImageShow );
			classNames.add( viewBoxBackgroundImageHide );
		}
		
		/** Shows the kary Hrose loge in the main view. */
		function ShowTheKaryHorse ( ) {
			let classNames = document.getElementById( ViewDivID ).classList;
			classNames.remove( viewBoxBackgroundImageHide );
			classNames.add( viewBoxBackgroundImageShow );
		}
	
	//
	// ─── VIEW CLEANER ───────────────────────────────────────────────────────────────
	//	
	
		/** Removes all the commnet generated in the main view. */
		export function CleanCommentView ( ) {
			document.getElementById( ViewDivID ).innerHTML = '';
			lastGeneratedCommentText = '';
			ShowTheKaryHorse( );
		}
		
	//
	// ─── FADE EFFECT ────────────────────────────────────────────────────────────────
	//
		
		/** Generates a fade effect for the rows */
		function FadeResultViews ( ) {
			// to be completed
		}

	//
	// ─── ERROR BOX GENERATOR ─────────────────────────────────────────────────────────
	//
	
		/** Creates an HTMLPreElement with a given input string */
		export function GenerateReport ( text: string ) {
			
			// changing the error status
			doneSuccessfully = false;
			lastGeneratedCommentText = '';
			
			// generating an error box
			let errorBox = document.createElement( 'pre' );
			errorBox.className = CommentBoxStyleClassName;
			errorBox.classList.add( ErrorMessageBoxClassName );
			errorBox.innerHTML = 'OPERATION FAILURE - ' + text;
			
			// appending the error box
			AppendElementToMainView( errorBox );
			
			// changing an status:
			isLastAppendedChildErrorBox = true;
			
		}
		
	//
	// ─── LOAD LANGUAGE FROM TEMPLATE ────────────────────────────────────────────────
	//
		
		function LoadLanguageTemplates ( languageChars: LanguageCharacters ) {
			LoadCharToInputs( CommentStyleMultiLineTopLeft , languageChars.tl );
			LoadCharToInputs( CommentStyleMultiLineTopRight , languageChars.tr );
			LoadCharToInputs( CommentStyleMultiLineBottomLeft , languageChars.bl );
			LoadCharToInputs( CommentStyleMultiLineBottomRight , languageChars.br );
			LoadCharToInputs( CommentStyleOneLine , languageChars.ol );
			UpdateCommentChars( );
		}
		
	//
	// ─── LOAD CHAR INTO INPUT ───────────────────────────────────────────────────────
	//
	
		function LoadCharToInputs ( id: string, value: string ) {
			( <HTMLInputElement> document.getElementById( id ) ).value = value;
		}	
	
		
	//
	// ─── LOAD LANGUAGE TEMPLATES ────────────────────────────────────────────────────
	//
	
		function LoadLanguageTemplateBoxes ( ) {
			for ( let index = 0; index < Languages.LanguageTemplates.length; index++ ) {
				let language = <LanguageTemplate> Languages.LanguageTemplates[ index ];
				let optionbox = MakeLanguageOptionBox( language );
				AppendLanguage( optionbox );
			}
			AppendEndingLanguageLine( );
			ApplyStartingSettingsToLanguage( );
			OnSetLanguageTemplate( );
		}
		
	//
	// ─── APPEND ENDING LINE ─────────────────────────────────────────────────────────
	//
		
		function AppendEndingLanguageLine ( ) {
			document.getElementById( CommentStyleOptionSelectBox ).innerHTML += (
				"<option disabled>&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;</option>"
			);
		}
		
	//
	// ─── ON SET LANGUAGE TEMPLATE ───────────────────────────────────────────────────
	//
		
		export function OnSetLanguageTemplate ( ) {
			var languageId = GetSelectBoxValueById( CommentStyleOptionSelectBox );
			if ( languageId === 'custom' ) {
				MakeCustomLanguageBoxesEditableOrNot( true );
			} else {
				MakeCustomLanguageBoxesEditableOrNot( false );
				LoadLanguageDetailsById( languageId );
			}
		}
	
	//
	// ─── MAKE ELEMENTS DISABLE OR NOT ───────────────────────────────────────────────
	//
		
		function MakeCustomLanguageBoxesEditableOrNot ( display: boolean ) {
			var languageInputBoxes = <HTMLDivElement> document.getElementById( CommentStyleCustomInputBox );
			
			if ( display ) {
				languageInputBoxes.style.opacity = '1.0';
			} else {
				languageInputBoxes.style.opacity = '0.5';
			}
			
			for ( var index = 0; index < languageInputBoxes.children.length; index++ ) {
				var element = <HTMLInputElement> languageInputBoxes.children[ index ];
				element.disabled = !display;
			}
		}
		
	//
	// ─── ON LOAD COMMENT DETAILS ────────────────────────────────────────────────────
	//

		function LoadLanguageDetailsById ( id: string ) {
			var language = GetLanguageTemplateById( id );
			LoadLanguageTemplates( language.temp );
		}	

	//
	// ─── GET LANGUAGE TEMPLATE BY ID ────────────────────────────────────────────────
	//
	
		function GetLanguageTemplateById ( id: string ) : LanguageTemplate {
			for ( var index = 0; index < Languages.LanguageTemplates.length; index++ ) {
				var language = Languages.LanguageTemplates[index];
				if ( language.id === id ) {
					return language;
				}
			}
			return null;
		}

	//
	// ─── MAKE LANGUAGE OPTION BOX ───────────────────────────────────────────────────
	//

		function MakeLanguageOptionBox ( language: LanguageTemplate ) : HTMLOptionElement {
			let optionBox = document.createElement( 'option' );
			optionBox.value = language.id;
			if ( language.id === 'c' ) {
				optionBox.id = CommentStyleSelectedTemplate;
			}
			optionBox.innerText = language.name;
			return optionBox;
		}
		
	//
	// ─── LOADING LANGUAGE TEMPLATE SETTINGS ─────────────────────────────────────────
	//
		
		function ApplyStartingSettingsToLanguage ( ) {
			( <HTMLOptionElement> document.getElementById( CommentStyleSelectedTemplate ) ).selected = true;
			MakeCustomLanguageBoxesEditableOrNot( false );
		}
		
	//
	// ─── APPEND LANGUAGE OPTION BOX ─────────────────────────────────────────────────
	//
	
		function AppendLanguage ( box: HTMLOptionElement ) {
			document.getElementById( CommentStyleOptionSelectBox ).appendChild( box );
		}
		
	//
	// ─── FREES THE GLOBAL ERROR MESSAGE PLACES ──────────────────────────────────────
	//
		
		/** Re initilizes the global error place holders */
		function FreeGlobalErrorStorage ( ) {
			doneSuccessfully = true;
		}
		
	//
	// ─── GETS THE INPUT DESCRIPTION ─────────────────────────────────────────────────
	//
		
		/** Gets the description of the input. */
		function GetInputNameById ( id: string ): string {		
			switch ( id ) {
				case CommentIndentSize:
					return "`Indentation's Scoping Level`  [ &sect; Indentation &rightarrow; Scope ]";
				case CommentSizeBox:
					return "`Comment Length`  [ &sect; Preferences &rightarrow; Length ]";
				case CommentIndentSize:
					return "`Flag Comment Index`  [ &sect; Preferences &rightarrow; Index ]";
			}
		}

	//
	// ─── ON CHANGE COMMENT SETTING SHORTCUT ─────────────────────────────────────────
	//

		export function ChangeCommentKind ( option: string ) {
			SetChooseBoxSelection ( CommentKindBox , option );
		}
		
	// ────────────────────────────────────────────────────────────────────────────────
	
}