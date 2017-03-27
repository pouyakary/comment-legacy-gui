var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
//
// Comment IV
//    Copyright 2016 Kary Foundation, Inc.
//    Author: Pouya Kary <k@karyfoundation.org>
//
//
// ─── SHARED VARIABLES ───────────────────────────────────────────────────────────
//
//
// ─── LANGUAGE SETTINGS ──────────────────────────────────────────────────────────
//
var languageMultiLineTopLeft;
var languageMultiLineTopRight;
var languageMultiLineBottomLeft;
var languageMultiLineBottomRight;
var languageOneLine;
//
// ─── INPUTS ─────────────────────────────────────────────────────────────────────
//
var globalTextValue;
var globalSeparatorValue;
var globalSizeValue;
var globalIndexValue;
var globalIndentSizeValue;
var globalIndentStringValue;
//
// ─── SHARED SYSTEM RESOURCES ────────────────────────────────────────────────────
//
var isLastAppendedChildErrorBox = false;
var doneSuccessfully;
// ────────────────────────────────────────────────────────────────────────────────
// ────────────────────────────────────────────────────────────────────────────────
//
// ─── CORE NAMESPACES ────────────────────────────────────────────────────────────
//
var Core;
(function (Core) {
    //
    // ─── SPECIAL CHARACTERS ──────────────────────────────────────────
    //
    const boxVerticalCharacter = '&boxv;';
    const boxHorizontalCharacter = '&boxh;';
    const boxTopLeftCharacter = '&boxdr;';
    const boxTopRightCharacter = '&boxdl;';
    const boxBottomLeftCharacter = '&boxur;';
    const boxBottomRightCharacter = '&boxul;';
    //
    // ─── COMMENT CLASS GENERATOR ─────────────────────────────────────
    //
    /** Function to generation Kary Class Comment. */
    function GenerateClassComment() {
        // Checking for possibility
        if (!CheckCommentSizes(5, true, true)) {
            return null;
        }
        // First Info
        let comment;
        // Line One
        comment = languageMultiLineTopLeft + ' ' + MakeLine(globalSizeValue) + ' ' + languageMultiLineTopRight + '\n';
        // Line Two
        const titleText = MakeTitle(globalTextValue);
        let inCaseOfOddNumber = '';
        let dots = '';
        // • • • • •
        for (let counter = 1; counter < (globalSizeValue - titleText.length) / 2; counter++) {
            dots += '&colon;';
        }
        // • • • • •
        if ((globalSizeValue - titleText.length) % 2 == 0) {
            console.log('here');
            inCaseOfOddNumber = '&colon;';
        }
        // • • • • •
        comment += languageMultiLineBottomLeft + ' ' + inCaseOfOddNumber + dots + titleText + ' ' + dots + ' ' + languageMultiLineTopRight + '\n';
        // Line Tree
        comment += languageMultiLineBottomLeft + ' ' + MakeLine(globalSizeValue) + ' ' + languageMultiLineBottomRight;
        // Done!
        console.log(comment);
        return comment;
    }
    Core.GenerateClassComment = GenerateClassComment;
    //
    // ─── FLAG COMMENT GENERATOR ──────────────────────────────────────
    //
    /**
     * Function to generate flag comment
     */
    function GenerateFlagComment() {
        // Line 1
        let comment = languageOneLine + '\n';
        // Line 2
        const text = MakeTitle(globalTextValue);
        comment += languageOneLine + ' ' + RepeatText(boxHorizontalCharacter, text.length + 40) + ' ' + Kary.Text.Numerics.Roman(globalIndexValue) + ' ' + RepeatText(boxHorizontalCharacter, 10) + '\n';
        // Line 3
        comment += languageOneLine + '  ::::::' + text + ' : :  :   :    :     :        :          :\n';
        // Line 4
        comment += languageOneLine + ' ' + RepeatText(boxHorizontalCharacter, 50 + text.length) + '\n';
        // Line 5
        comment += languageOneLine;
        // Done
        return comment;
    }
    Core.GenerateFlagComment = GenerateFlagComment;
    //
    // ─── LINE GENERATOR ──────────────────────────────────────────────
    //
    /**
     * Function to generate Line Comment
     */
    function GenerateLineComment() {
        return languageOneLine + ' ' + RepeatText(boxHorizontalCharacter, globalSizeValue);
    }
    Core.GenerateLineComment = GenerateLineComment;
    //
    // ─── SUBLINE GENERATOR ───────────────────────────────────────────
    //
    /**
     * Function to generate Subline Comment
     */
    function GenerateSubLineComment() {
        // Checking for possibility
        if (!CheckCommentSizes(4, false, false)) {
            return null;
        }
        // Generating the comment
        let comment = languageOneLine;
        if (globalSizeValue % 2 == 0) {
            comment += ' ';
        }
        comment += RepeatText(' -', globalSizeValue / 2);
        return comment;
    }
    Core.GenerateSubLineComment = GenerateSubLineComment;
    //
    // ─── SECTION COMMENT GENERATOR ───────────────────────────────────
    //
    /**
     * Function to generate Section Comment
     */
    function GenerateSectionComment() {
        // Checking for possibility
        if (!CheckCommentSizes(8, false, true)) {
            return null;
        }
        // Line 1
        let comment = languageOneLine + '\n';
        // Line 2
        comment += (languageOneLine + ' ' + RepeatText(boxHorizontalCharacter, 3) + ' ' +
            globalTextValue.toUpperCase() + ' ' + RepeatText(boxHorizontalCharacter, globalSizeValue - globalTextValue.length - 5) + '\n');
        // Line 3
        comment += languageOneLine;
        // Done
        return comment;
    }
    Core.GenerateSectionComment = GenerateSectionComment;
    //
    // ─── SUBSECTION COMMENT GENERATOR ────────────────────────────────
    //
    /**
     * Comment to generate Subsection Comment
     */
    function GenerateSubSectionComment() {
        // Checking for possibility
        if (!CheckCommentSizes(6, false, true)) {
            return null;
        }
        // Line 1
        let comment = languageOneLine + '\n';
        // Line 2
        comment += languageOneLine + ' ' + '- -' + ' ' + globalTextValue.toLowerCase();
        let lineSize = (globalSizeValue - globalTextValue.length - 5) / 2;
        if (lineSize % 2 == 0) {
            comment += ' ' + RepeatText(' -', lineSize) + '\n';
        }
        else {
            comment += RepeatText(' -', lineSize) + '\n';
        }
        // Line 3
        comment += languageOneLine;
        // Done
        return comment;
    }
    Core.GenerateSubSectionComment = GenerateSubSectionComment;
    //
    // ─── INSECTION COMMENT GENERATOR ─────────────────────────────────
    //
    /**
     * Function to generate Insertion Comment
     */
    function GenerateInSectionComment() {
        // Generating the comment
        let comment = languageOneLine + '\n';
        comment += languageOneLine + ' ' + globalTextValue.toUpperCase() + '\n';
        comment += languageOneLine;
        return comment;
    }
    Core.GenerateInSectionComment = GenerateInSectionComment;
    //
    // ─── SEPARATOR COMMENT GENERATOR ─────────────────────────────────
    //
    /**
     * Function to generate Separate Comment
     */
    function GenerateSeparatorComment() {
        // Generating the comment
        return '//' + RepeatText(' ' + globalSeparatorValue, 5);
    }
    Core.GenerateSeparatorComment = GenerateSeparatorComment;
    //
    // ─── MAKE LINE ───────────────────────────────────────────────────
    //
    /**
     * Function that generates line with given size.
     */
    function MakeLine(size) {
        return RepeatText(boxHorizontalCharacter, size);
    }
    //
    // ─── MAKE TITLE ──────────────────────────────────────────────────
    //
    /**
     * Transfers a text like 'title' to 'T I T L E '
     */
    function MakeTitle(text) {
        let result = '';
        for (let index = 0; index < text.length; index++) {
            result += ' ' + text[index];
        }
        return result.toUpperCase();
    }
    //
    // ─── REPEAT TEXT ─────────────────────────────────────────────────
    //
    /**
     * Repeats a text with given times (used to create lines...)
     */
    function RepeatText(character, size) {
        let text = '';
        for (let counter = 0; counter < size; counter++) {
            text += character;
        }
        return text;
    }
    Core.RepeatText = RepeatText;
    //
    // ─── COMMENT INDENT APPLIER ──────────────────────────────────────
    //
    /**
     * Applies indentation on the comments
     */
    function ApplyIndentation(comment) {
        // • • • • •
        let lines;
        try {
            lines = comment.split('\n');
        }
        catch (err) {
            lines = [comment];
        }
        // • • • • •
        let result = '';
        const countOfLines = lines.length;
        // • • • • •
        for (let counter = 0; counter < countOfLines; counter++) {
            result += RepeatText(globalIndentStringValue, globalIndentSizeValue) + lines[counter];
            if (counter < countOfLines - 1) {
                result += '\n';
            }
        }
        // • • • • •
        return result;
    }
    Core.ApplyIndentation = ApplyIndentation;
    //
    // ─── COMMENT SIZE CHECKER ────────────────────────────────────────
    //
    /** Checks to see if the size of the comment is right */
    function CheckCommentSizes(minStaticTextLength, hasTitle, countTextSize) {
        if (minStaticTextLength > globalSizeValue) {
            UI.GenerateReport("Given size for the comment is too short.");
            return false;
        }
        else {
            let textLength = 0;
            if (countTextSize) {
                textLength = globalTextValue.length;
                if (hasTitle) {
                    textLength *= 2;
                }
            }
            if (globalSizeValue - textLength < minStaticTextLength) {
                UI.GenerateReport("Failed to generate the comment");
                return false;
            }
        }
        return true;
    }
    // ─────────────────────────────────────────────────────────────────
})(Core || (Core = {}));
// ────────────────────────────────────────────────────────────────────────────────
//
// Kary.Text Framework - Numerics Library
//    Copyright 2015-2016 Kary Foundation, Inc.
//    Author: Pouya Kary <k@karyfoundation.org>
//
/* ──────────────────────────────────────────────────────────────────────────────── *
 * ::::::::: K A R Y   F R A M E W O R K   N U M E R I C S   L I B R A R Y :::::::: *
 * ──────────────────────────────────────────────────────────────────────────────── */
// ────────────────────────────────────────────────────────────────────────────────────────────────────
var Kary;
(function (Kary) {
    var Text;
    (function (Text) {
        var Numerics;
        (function (Numerics) {
            //
            // ─── ROMAN NUMBER GENERATOR ─────────────────────────────────────────────────────
            //
            /**
             * Generates a Roman number in by inputs in range of [0..4999]
             */
            function Roman(input) {
                // A very special case as you know...
                if (input === 0) {
                    return 'NULL';
                }
                // Also known...
                if (input > 4999) {
                    UI.GenerateReport("Can not generate roman number greater than 4999");
                    return 'HUGE';
                }
                // Result
                let result = '';
                // Values:
                const values = [
                    1000, 900, 500, 400, 100, 90,
                    50, 40, 10, 9, 5, 4, 1
                ];
                const numerals = [
                    "M", "CM", "D", "CD", "C", "XC", "L",
                    "XL", "X", "IX", "V", "IV", "I"
                ];
                // Generator
                for (let index = 0; index < 13; index++) {
                    while (input >= values[index]) {
                        input -= values[index];
                        result += numerals[index];
                    }
                }
                // done
                return result;
            }
            Numerics.Roman = Roman;
            // ────────────────────────────────────────────────────────────────────────────────
        })(Numerics = Text.Numerics || (Text.Numerics = {}));
    })(Text = Kary.Text || (Kary.Text = {}));
})(Kary || (Kary = {}));
// ──────────────────────────────────────────────────────────────────────────────────────────────────── 
//
// Comment IV 
//    Copyright 2016 Kary Foundation, Inc.
//    Author: Pouya Kary <k@karyfoundation.org>
//
/// <reference path="comment.ts" />
//
// ─── LANGUAGES ──────────────────────────────────────────────────────────────────
//
var Languages;
(function (Languages) {
    Languages.LanguageTemplates = [
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
            'temp': {
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
        // COFFEE SCRIPT
        //
        {
            'id': 'coffeescript',
            'name': 'CoffeeScript',
            'temp': {
                'ol': '#',
                'tl': '###',
                'tr': '#',
                'bl': '  #',
                'br': '###',
            }
        },
        //
        // LUA
        //
        {
            'id': 'lua',
            'name': 'Lua',
            'temp': {
                'ol': '--',
                'tl': '--',
                'tr': '--',
                'bl': '--',
                'br': '--',
            }
        },
        //
        // BASIC
        //
        {
            'id': 'basic',
            'name': 'Basic Family',
            'temp': {
                'ol': "'",
                'tl': "'",
                'tr': "'",
                'bl': "'",
                'br': "'",
            }
        },
        //
        // HASKELL
        //
        {
            'id': 'haskell',
            'name': 'Haskell',
            'temp': {
                'ol': '--',
                'tl': '{-',
                'tr': '-',
                'bl': ' -',
                'br': '-}',
            }
        },
        //
        // MATLAB
        //
        {
            'id': 'octave',
            'name': 'MATLAB & Octave',
            'temp': {
                'ol': '--',
                'tl': '%{',
                'tr': '%',
                'bl': ' %',
                'br': '}%',
            }
        },
        //
        // LATEX
        //
        {
            'id': 'tex',
            'name': 'Tex',
            'temp': {
                'ol': '%',
                'tl': '%',
                'tr': '%',
                'bl': '%',
                'br': '%',
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
        // APPLESCRIPT
        //
        {
            'id': 'applescript',
            'name': 'AppleScript',
            'temp': {
                'ol': '--',
                'tl': '(*',
                'tr': '*',
                'bl': ' *',
                'br': '*)',
            }
        },
        //
        // LISP
        //
        {
            'id': 'lisp',
            'name': 'Lisp Family',
            'temp': {
                'ol': ';;',
                'tl': '#|',
                'tr': '|',
                'bl': ' |',
                'br': '|#',
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
        // F#
        //
        {
            'id': 'fsharp',
            'name': 'F#',
            'temp': {
                'ol': '--',
                'tl': '(*',
                'tr': '*',
                'bl': ' *',
                'br': '*)',
            }
        },
        //
        // FORTRAN
        //
        {
            'id': 'fortran',
            'name': 'FORTRAN',
            'temp': {
                'ol': '!',
                'tl': '!',
                'tr': '!',
                'bl': '!',
                'br': '!',
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
    ];
})(Languages || (Languages = {}));
// ──────────────────────────────────────────────────────────────────────────────── 
//
// Comment IV 
//    Copyright 2016 Kary Foundation, Inc.
//    Author: Pouya Kary <k@karyfoundation.org>
//
var UI;
(function (UI) {
    //
    // ─── INFO ───────────────────────────────────────────────────────────────────────
    //
    // Main Version
    const CommentVersion = 'IV.5.175';
    // Input Divs
    const OneLineInputDivID = "one-line-value-div";
    const SizeInputDivID = "size-value-div";
    const IndexInputDivID = "index-value-div";
    const SeparatorCharacterDivID = "separator-value-div";
    // Input Box IDs
    const CommentKindBox = "commentformatbox";
    const CommentValueBox = "cp-value";
    const CommentSizeBox = "cp-size";
    const CommentIndexBox = "cp-index";
    const CommentSeparatorCharacterBox = "cp-separator";
    // Language Settings
    const CommentStyleOptionSelectBox = 'language-template';
    const CommentStyleCustomInputBox = 'custom-language-inputs';
    const CommentStyleSelectedTemplate = 'starting-selected-item';
    const CommentStyleMultiLineTopLeft = 'cs-top-left';
    const CommentStyleMultiLineTopRight = 'cs-top-right';
    const CommentStyleMultiLineBottomLeft = 'cs-bottom-left';
    const CommentStyleMultiLineBottomRight = 'cs-bottom-right';
    const CommentStyleOneLine = 'cs-one-line';
    // Indentation
    const CommentIndentString = 'ci-string';
    const CommentIndentSize = 'ci-size';
    // Comment Style Values
    const CommentStyleClass = 'class';
    const CommentStyleFlag = 'flag';
    const CommentStyleSection = 'section';
    const CommentStyleSubSection = 'subsection';
    const CommentStyleInSection = 'insection';
    const CommentStyleLine = 'line';
    const CommentStyleSubLine = 'subline';
    const CommentStyleNote = 'note';
    const CommentStyleSeparator = 'separator';
    // Generating Settings
    const ViewDivID = 'view';
    const CommentBoxStyleClassName = 'comment-box';
    const TheKaryHorseDivID = 'kary-horse-back';
    const ErrorMessageBoxClassName = 'error-box';
    // Constant Settings
    const displayOn = 'inline';
    const displayOff = 'none';
    const viewBoxBackgroundImageHide = 'kary-horse-back-hide';
    const viewBoxBackgroundImageShow = 'kary-horse-back-show';
    // About Page
    const AboutPageBoxId = 'about-page';
    const AboutPageVersionBox = 'about-version-box';
    // Local Storage Identifiers
    var lastGeneratedCommentText = '';
    var windowOnInspectorOnlyMode = false;
    //
    // ─── THIS RUNS AT LOAD TIME ─────────────────────────────────────────────────────
    //
    /** Initializes the software on load. */
    function InitOnLoad() {
        CloseAboutPage();
        LoadSettings();
        LoadLanguageTemplateBoxes();
        InitVersionBoxContent();
        UpdateCommentChars();
        UpdateViewStateOfActiveInputBoxes();
    }
    UI.InitOnLoad = InitOnLoad;
    //
    // ─── INIT VERSION INFO ──────────────────────────────────────────────────────────
    //
    function InitVersionBoxContent() {
        document.getElementById(AboutPageVersionBox).innerText = CommentVersion;
    }
    //
    // ─── ABOUT PAGE HANDLERS ────────────────────────────────────────────────────────
    //
    function OpenAboutPage() {
        document.getElementById(AboutPageBoxId).hidden = false;
    }
    UI.OpenAboutPage = OpenAboutPage;
    // ────────────────────────────────────────────────────────────────────────────────
    function CloseAboutPage() {
        document.getElementById(AboutPageBoxId).hidden = true;
    }
    UI.CloseAboutPage = CloseAboutPage;
    //
    // ─── GENERATE COMMENT HTML ──────────────────────────────────────────────────────
    //
    function GenerateCommentHTMLCode() {
        try {
            FreeGlobalErrorStorage();
            HideTheKaryHorse();
            UpdateGlobalInputVariables();
            UpdateCommentChars();
            return GenerateComment();
        }
        catch (err) {
            return null;
        }
    }
    //
    // ─── HTML GENERATE AND COPY ─────────────────────────────────────────────────────
    //
    function CopyHTMLCode() {
        let commentString = GenerateCommentHTMLCode();
        if (commentString != null)
            ElectronCopy(GenerateComment());
    }
    UI.CopyHTMLCode = CopyHTMLCode;
    //
    // ─── LOCAL STORAGE SYSTEM ───────────────────────────────────────────────────────
    //
    /** Interface of Local Storage for the Comment IV */
    var C4LocalStorage;
    (function (C4LocalStorage) {
        const localStorageIdentifer = 'org.karyfoundation.comment-iv.';
        /** Stores data in the localStorage as the Comment IV.  */
        function Store(key, data) {
            localStorage.setItem(localStorageIdentifer + key, data);
        }
        C4LocalStorage.Store = Store;
        /** Loads the Comment IV's data from the storage. */
        function Load(key) {
            return localStorage.getItem(localStorageIdentifer + key);
        }
        C4LocalStorage.Load = Load;
    })(C4LocalStorage || (C4LocalStorage = {}));
    //
    // ─── LOAD SETTINGS ──────────────────────────────────────────────────────────────
    //
    /** Loads the settings from localStorage and sets them to their values */
    function LoadSettings() {
        LoadSelectBoxValues();
        LoadInputBoxValues();
    }
    //
    // ─── CURRENT COMMENT SETTING LOADER ─────────────────────────────────────────────
    //
    /** Loads the current comment setting. */
    function LoadSelectBoxSettingById(selectBoxID) {
        SetChooseBoxSelection(selectBoxID, C4LocalStorage.Load(selectBoxID));
    }
    //
    // ─── LOAD SELECT BOX VALUES ─────────────────────────────────────────────────────
    //
    /** Loads the selectBoxes */
    function LoadSelectBoxValues() {
        LoadSelectBoxSettingById(CommentKindBox);
        LoadSelectBoxSettingById(CommentSeparatorCharacterBox);
    }
    //
    // ─── LOAD INPUT BOXES ───────────────────────────────────────────────────────────
    //
    function LoadInputBoxValues() {
        // • • • • •
        LoadCommentChars();
        // • • • • •
        LoadInputBoxFromLocalStorageById(CommentValueBox);
        LoadInputBoxFromLocalStorageById(CommentSizeBox);
        LoadInputBoxFromLocalStorageById(CommentIndentSize);
        LoadInputBoxFromLocalStorageById(CommentIndentString);
        LoadInputBoxFromLocalStorageById(CommentIndentSize);
    }
    //
    // ─── COMMENT STORING ────────────────────────────────────────────────────────────
    //
    function UpdateAndStoreCommentCharacters() {
        StoreInputBoxById(CommentStyleMultiLineBottomLeft);
        StoreInputBoxById(CommentStyleMultiLineBottomRight);
        StoreInputBoxById(CommentStyleMultiLineTopLeft);
        StoreInputBoxById(CommentStyleMultiLineTopRight);
        StoreInputBoxById(CommentStyleOneLine);
    }
    UI.UpdateAndStoreCommentCharacters = UpdateAndStoreCommentCharacters;
    function StoreInputBoxById(id) {
        C4LocalStorage.Store(id, document.getElementById(id).value);
    }
    //
    // ─── CHARACTER UPDATE AND STORING ───────────────────────────────────────────────
    //
    function LoadCommentChars() {
        LoadInputBoxFromLocalStorageById(CommentStyleMultiLineBottomLeft);
        LoadInputBoxFromLocalStorageById(CommentStyleMultiLineBottomRight);
        LoadInputBoxFromLocalStorageById(CommentStyleMultiLineTopLeft);
        LoadInputBoxFromLocalStorageById(CommentStyleMultiLineTopRight);
        LoadInputBoxFromLocalStorageById(CommentStyleOneLine);
        UpdateCommentChars();
    }
    //
    // ─── INPUT BOX VALUE LOADER ─────────────────────────────────────────────────────
    //
    /** Loads the value of an input box */
    function LoadInputBoxFromLocalStorageById(id) {
        const localStorageValue = C4LocalStorage.Load(id);
        if (localStorageValue != undefined && localStorageValue != null) {
            let inputBox = document.getElementById(id);
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
    function OnTextInputKeyPress(event) {
        if (event.keyCode == 13) {
            CreateNewComment();
        }
    }
    UI.OnTextInputKeyPress = OnTextInputKeyPress;
    //
    // ─── CREATE A NEW COMMENT ───────────────────────────────────────────────────────
    //
    /** Generates a new comment and displays it on the main view. */
    function CreateNewComment() {
        // • • • • •
        let commentString = GenerateCommentHTMLCode();
        if (commentString == null)
            return 0;
        // • • • • •
        if (doneSuccessfully) {
            let result = document.createElement('pre');
            result.className = CommentBoxStyleClassName;
            result.innerHTML = commentString;
            lastGeneratedCommentText = result.innerText;
            AppendElementToMainView(result);
            CopyComment();
        }
        // • • • • •
        FadeResultViews();
    }
    UI.CreateNewComment = CreateNewComment;
    //
    // ─── COPY COMMENT TOOL ──────────────────────────────────────────────────────────
    //
    function CopyComment() {
        if (lastGeneratedCommentText !== '') {
            ElectronCopy(lastGeneratedCommentText.replace(/^\s+/, ''));
        }
    }
    UI.CopyComment = CopyComment;
    //
    // ─── APPEND NEW ELEMENT TO MAIN VIEW ────────────────────────────────────────────
    //
    /**
     * Appends a div element to the main view of the element and applies
     * the effects regarding the status of the elements in the view.
     */
    function AppendElementToMainView(newElement) {
        // • • • • •
        let viewDiv = document.getElementById(ViewDivID);
        // • • • • •
        if (isLastAppendedChildErrorBox) {
            viewDiv.removeChild(viewDiv.firstChild);
            isLastAppendedChildErrorBox = false;
        }
        // • • • • •
        if (viewDiv.children.length == 0) {
            viewDiv.appendChild(newElement);
        }
        else {
            viewDiv.firstElementChild.classList.add('comment-box-deactivate');
            viewDiv.insertBefore(newElement, viewDiv.firstChild);
        }
        // • • • • •
        if (viewDiv.children.length > 10) {
            viewDiv.removeChild(viewDiv.lastChild);
        }
    }
    //
    // ─── ON GENERATE COMMENT ────────────────────────────────────────────────────────
    //
    /**
     * Gives the comment style and calls the current
     * function to generate that kind of comment
     * and then returns the comment as a string.
     */
    function GenerateComment() {
        // • • • • •
        let commentString;
        // • • • • •
        switch (GetCommentKind()) {
            case CommentStyleClass:
                commentString = Core.GenerateClassComment();
                break;
            case CommentStyleFlag:
                commentString = Core.GenerateFlagComment();
                break;
            case CommentStyleSection:
                commentString = Core.GenerateSectionComment();
                break;
            case CommentStyleSubSection:
                commentString = Core.GenerateSubSectionComment();
                break;
            case CommentStyleInSection:
                commentString = Core.GenerateInSectionComment();
                break;
            case CommentStyleLine:
                commentString = Core.GenerateLineComment();
                break;
            case CommentStyleSubLine:
                commentString = Core.GenerateSubLineComment();
                break;
            case CommentStyleSeparator:
                commentString = Core.GenerateSeparatorComment();
                break;
        }
        // • • • • •
        commentString = Core.ApplyIndentation(commentString);
        // • • • • •
        return commentString;
    }
    //
    // ─── EVENT HANDLERS ─────────────────────────────────────────────────────────────
    //
    /**
     * Sets the visibility of the user input elements
     * based on the current comment style to reduce user
     * errors and show the necessary settings for the
     * current comment style.
     */
    function UpdateViewStateOfActiveInputBoxes() {
        // • • • • •
        StoreSelectBoxById(CommentKindBox);
        // • • • • •
        let sizeBox = document.getElementById(SizeInputDivID);
        let indexBox = document.getElementById(IndexInputDivID);
        let valueBox = document.getElementById(OneLineInputDivID);
        let separatorBox = document.getElementById(SeparatorCharacterDivID);
        // • • • • •
        switch (GetCommentKind()) {
            case CommentStyleClass:
                sizeBox.style.display = displayOn;
                indexBox.style.display = displayOff;
                valueBox.style.display = displayOn;
                separatorBox.style.display = displayOff;
                break;
            case CommentStyleFlag:
                sizeBox.style.display = displayOff;
                indexBox.style.display = displayOn;
                valueBox.style.display = displayOn;
                separatorBox.style.display = displayOff;
                break;
            case CommentStyleSection:
                sizeBox.style.display = displayOn;
                indexBox.style.display = displayOff;
                valueBox.style.display = displayOn;
                separatorBox.style.display = displayOff;
                break;
            case CommentStyleSubSection:
                sizeBox.style.display = displayOn;
                indexBox.style.display = displayOff;
                valueBox.style.display = displayOn;
                separatorBox.style.display = displayOff;
                break;
            case CommentStyleLine:
                sizeBox.style.display = displayOn;
                indexBox.style.display = displayOff;
                valueBox.style.display = displayOff;
                separatorBox.style.display = displayOff;
                break;
            case CommentStyleSubLine:
                sizeBox.style.display = displayOn;
                indexBox.style.display = displayOff;
                valueBox.style.display = displayOff;
                separatorBox.style.display = displayOff;
                break;
            case CommentStyleSeparator:
                sizeBox.style.display = displayOff;
                indexBox.style.display = displayOff;
                valueBox.style.display = displayOff;
                separatorBox.style.display = displayOn;
                break;
            case CommentStyleInSection:
                sizeBox.style.display = displayOff;
                indexBox.style.display = displayOff;
                valueBox.style.display = displayOn;
                separatorBox.style.display = displayOff;
                break;
            case CommentStyleNote:
                sizeBox.style.display = displayOff;
                indexBox.style.display = displayOff;
                valueBox.style.display = displayOff;
                separatorBox.style.display = displayOff;
                break;
        }
    }
    UI.UpdateViewStateOfActiveInputBoxes = UpdateViewStateOfActiveInputBoxes;
    //
    // ─── STORE CURRENT COMMENT SETTING ──────────────────────────────────────────────
    //
    /** Stores the current comment setting. */
    function StoreSelectBoxById(id) {
        C4LocalStorage.Store(id, GetSelectBoxValueById(id));
    }
    //
    // ─── UPDATE COMMENT CHARS ───────────────────────────────────────────────────────
    //
    /** Updates the global language setting variables based on the user input. */
    function UpdateCommentChars() {
        languageMultiLineBottomLeft = UpdateCommentCharParameter(CommentStyleMultiLineBottomLeft);
        languageMultiLineBottomRight = UpdateCommentCharParameter(CommentStyleMultiLineBottomRight);
        languageMultiLineTopLeft = UpdateCommentCharParameter(CommentStyleMultiLineTopLeft);
        languageMultiLineTopRight = UpdateCommentCharParameter(CommentStyleMultiLineTopRight);
        languageOneLine = UpdateCommentCharParameter(CommentStyleOneLine);
    }
    UI.UpdateCommentChars = UpdateCommentChars;
    //
    // ─── UPDATES DATA ───────────────────────────────────────────────────────────────
    //
    /** Gets the box value as well as setting the new value to the database */
    function UpdateCommentCharParameter(styleID) {
        const value = GetInputElementValue(styleID);
        C4LocalStorage.Store(styleID, value);
        return value;
    }
    //
    // ─── UPDATE GLOBAL VARIABLE INFOS ───────────────────────────────────────────────
    //
    /** Updates the global variables once they are changed. */
    function UpdateGlobalInputVariables() {
        // • • • • •
        globalSeparatorValue = GetSelectBoxValueById(CommentSeparatorCharacterBox);
        globalIndentStringValue = GetSelectBoxValueById(CommentIndentString);
        // • • • • •
        globalTextValue = GetInputElementValue(CommentValueBox);
        // • • • • •
        try {
            globalSizeValue = ReadNumberInput(CommentSizeBox);
            globalIndexValue = ReadNumberInput(CommentIndexBox);
            globalIndentSizeValue = ReadNumberInput(CommentIndentSize);
        }
        catch (err) {
            throw 0;
        }
    }
    UI.UpdateGlobalInputVariables = UpdateGlobalInputVariables;
    //
    // ─── GET MODEL INFO ─────────────────────────────────────────────────────────────
    //
    /** Gets the current Command Kind from the select box of dashboard. */
    function GetCommentKind() {
        return GetSelectBoxValueById(CommentKindBox);
    }
    //
    // ─── GET CHOOSE BOX VALUE ───────────────────────────────────────────────────────
    //
    /** Reads the choose box value by passing an id. */
    function GetSelectBoxValueById(id) {
        const chooseBox = document.getElementById(id);
        return chooseBox.options[chooseBox.selectedIndex].value;
    }
    //
    // ─── CHANGES THE SELECTED BOX ITEM ──────────────────────────────────────────────
    //
    /** Changes the a select box's item to the given value */
    function SetChooseBoxSelection(selectBoxID, toBeSelectedItemValue) {
        let selectBox = document.getElementById(selectBoxID);
        for (let index = 0; index < selectBox.children.length; index++) {
            const element = selectBox.options[index].value;
            if (element == toBeSelectedItemValue) {
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
    function ReadNumberInput(id) {
        const value = (document.getElementById(id)).value;
        if (/^\d+$/.test(value)) {
            return parseInt(value);
        }
        else {
            GenerateReport("Could not read the field: " + GetInputNameById(id));
            throw 0;
        }
    }
    //
    // ─── GET INPUT ELEMENT VALUE ────────────────────────────────────────────────────
    //
    /** Reads the value of an HTML Input Element by ID. */
    function GetInputElementValue(id) {
        let result = document.getElementById(id).value;
        result = result.replace('<', '&lt;').replace('>', '&gt;');
        return result;
    }
    //
    // ─── KARY LOGO HANDLERS ─────────────────────────────────────────────────────────
    //
    /** Hides the kary Horse loge in the main view. */
    function HideTheKaryHorse() {
        let classNames = document.getElementById(ViewDivID).classList;
        classNames.remove(viewBoxBackgroundImageShow);
        classNames.add(viewBoxBackgroundImageHide);
    }
    /** Shows the kary Horse loge in the main view. */
    function ShowTheKaryHorse() {
        let classNames = document.getElementById(ViewDivID).classList;
        classNames.remove(viewBoxBackgroundImageHide);
        classNames.add(viewBoxBackgroundImageShow);
    }
    //
    // ─── VIEW CLEANER ───────────────────────────────────────────────────────────────
    //
    /** Removes all the comment generated in the main view. */
    function CleanCommentView() {
        document.getElementById(ViewDivID).innerHTML = '';
        lastGeneratedCommentText = '';
        ShowTheKaryHorse();
    }
    UI.CleanCommentView = CleanCommentView;
    //
    // ─── FADE EFFECT ────────────────────────────────────────────────────────────────
    //
    /** Generates a fade effect for the rows */
    function FadeResultViews() {
        // to be completed
    }
    //
    // ─── ERROR BOX GENERATOR ─────────────────────────────────────────────────────────
    //
    /** Creates an HTMLPreElement with a given input string */
    function GenerateReport(text) {
        // changing the error status
        doneSuccessfully = false;
        lastGeneratedCommentText = '';
        // generating an error box
        let errorBox = document.createElement('pre');
        errorBox.className = CommentBoxStyleClassName;
        errorBox.classList.add(ErrorMessageBoxClassName);
        errorBox.innerHTML = 'OPERATION FAILURE - ' + text;
        // appending the error box
        AppendElementToMainView(errorBox);
        // changing an status
        isLastAppendedChildErrorBox = true;
    }
    UI.GenerateReport = GenerateReport;
    //
    // ─── LOAD LANGUAGE FROM TEMPLATE ────────────────────────────────────────────────
    //
    function LoadLanguageTemplates(languageChars) {
        LoadCharToInputs(CommentStyleMultiLineTopLeft, languageChars.tl);
        LoadCharToInputs(CommentStyleMultiLineTopRight, languageChars.tr);
        LoadCharToInputs(CommentStyleMultiLineBottomLeft, languageChars.bl);
        LoadCharToInputs(CommentStyleMultiLineBottomRight, languageChars.br);
        LoadCharToInputs(CommentStyleOneLine, languageChars.ol);
        UpdateCommentChars();
    }
    //
    // ─── LOAD CHAR INTO INPUT ───────────────────────────────────────────────────────
    //
    function LoadCharToInputs(id, value) {
        document.getElementById(id).value = value;
    }
    //
    // ─── LOAD LANGUAGE TEMPLATES ────────────────────────────────────────────────────
    //
    function LoadLanguageTemplateBoxes() {
        for (let index = 0; index < Languages.LanguageTemplates.length; index++) {
            let language = Languages.LanguageTemplates[index];
            let optionBox = MakeLanguageOptionBox(language);
            AppendLanguage(optionBox);
        }
        AppendEndingLanguageLine();
        ApplyStartingSettingsToLanguage();
        OnSetLanguageTemplate();
    }
    //
    // ─── APPEND ENDING LINE ─────────────────────────────────────────────────────────
    //
    function AppendEndingLanguageLine() {
        document.getElementById(CommentStyleOptionSelectBox).innerHTML += ("<option disabled>&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;</option>");
    }
    //
    // ─── ON SET LANGUAGE TEMPLATE ───────────────────────────────────────────────────
    //
    function OnSetLanguageTemplate() {
        var languageId = GetSelectBoxValueById(CommentStyleOptionSelectBox);
        if (languageId === 'custom') {
            MakeCustomLanguageBoxesEditableOrNot(true);
        }
        else {
            MakeCustomLanguageBoxesEditableOrNot(false);
            LoadLanguageDetailsById(languageId);
        }
    }
    UI.OnSetLanguageTemplate = OnSetLanguageTemplate;
    //
    // ─── MAKE ELEMENTS DISABLE OR NOT ───────────────────────────────────────────────
    //
    function MakeCustomLanguageBoxesEditableOrNot(display) {
        var languageInputBoxes = document.getElementById(CommentStyleCustomInputBox);
        if (display) {
            languageInputBoxes.style.opacity = '1.0';
        }
        else {
            languageInputBoxes.style.opacity = '0.5';
        }
        for (var index = 0; index < languageInputBoxes.children.length; index++) {
            var element = languageInputBoxes.children[index];
            element.disabled = !display;
        }
    }
    //
    // ─── ON LOAD COMMENT DETAILS ────────────────────────────────────────────────────
    //
    function LoadLanguageDetailsById(id) {
        var language = GetLanguageTemplateById(id);
        LoadLanguageTemplates(language.temp);
    }
    //
    // ─── GET LANGUAGE TEMPLATE BY ID ────────────────────────────────────────────────
    //
    function GetLanguageTemplateById(id) {
        for (var index = 0; index < Languages.LanguageTemplates.length; index++) {
            var language = Languages.LanguageTemplates[index];
            if (language.id === id) {
                return language;
            }
        }
        return null;
    }
    // ────────────────────────────────────────────────────────────────────────────────
    //
    // ─── MAKE LANGUAGE OPTION BOX ───────────────────────────────────────────────────
    //
    function MakeLanguageOptionBox(language) {
        let optionBox = document.createElement('option');
        optionBox.value = language.id;
        if (language.id === 'c') {
            optionBox.id = CommentStyleSelectedTemplate;
        }
        optionBox.innerText = language.name;
        return optionBox;
    }
    //
    // ─── LOADING LANGUAGE TEMPLATE SETTINGS ─────────────────────────────────────────
    //
    function ApplyStartingSettingsToLanguage() {
        document.getElementById(CommentStyleSelectedTemplate).selected = true;
        MakeCustomLanguageBoxesEditableOrNot(false);
    }
    //
    // ─── APPEND LANGUAGE OPTION BOX ─────────────────────────────────────────────────
    //
    function AppendLanguage(box) {
        document.getElementById(CommentStyleOptionSelectBox).appendChild(box);
    }
    //
    // ─── FREES THE GLOBAL ERROR MESSAGE PLACES ──────────────────────────────────────
    //
    /** Re initializes the global error place holders */
    function FreeGlobalErrorStorage() {
        doneSuccessfully = true;
    }
    //
    // ─── GETS THE INPUT DESCRIPTION ─────────────────────────────────────────────────
    //
    /** Gets the description of the input. */
    function GetInputNameById(id) {
        switch (id) {
            case CommentIndentSize:
                return "`Indentations Scoping Level`  [ &sect; Indentation &rightarrow; Scope ]";
            case CommentSizeBox:
                return "`Comment Length`  [ &sect; Preferences &rightarrow; Length ]";
            case CommentIndentSize:
                return "`Flag Comment Index`  [ &sect; Preferences &rightarrow; Index ]";
        }
    }
    //
    // ─── ON CHANGE COMMENT SETTING SHORTCUT ─────────────────────────────────────────
    //
    function ChangeCommentKind(option) {
        SetChooseBoxSelection(CommentKindBox, option);
        UpdateViewStateOfActiveInputBoxes();
    }
    UI.ChangeCommentKind = ChangeCommentKind;
    //
    // ─── ON COMMAND A ───────────────────────────────────────────────────────────────
    //
    function OnCommandA() {
        var valueBox = document.getElementById(CommentValueBox);
        valueBox.focus();
        valueBox.setSelectionRange(0, valueBox.value.length);
    }
    UI.OnCommandA = OnCommandA;
    //
    // ─── WINDOW RESIZE TOOL ─────────────────────────────────────────────────────────
    //
    function changeInspectorOnlyMode() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    UI.changeInspectorOnlyMode = changeInspectorOnlyMode;
    // ────────────────────────────────────────────────────────────────────────────────
})(UI || (UI = {}));
