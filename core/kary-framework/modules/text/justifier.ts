
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

namespace kary.text.justifier {

    //
    // ─── ENUMS ──────────────────────────────────────────────────────────────────────
    //

        export enum justifyMode {
            fill, left, right, center
        }

    //
    // ─── WORD CHOOSER ───────────────────────────────────────────────────────────────
    //

        /**
         * Chooses words is a way that they go in less than the width size.
         */
        function wordChooser ( text: string, width: number ) {
            let words = text.split( /\s/g )
            let lines = new Array<Array<string>>( )
            let currentLine = new Array<string>( )
            let currentLineLength = 0
            for ( let word of words ) {
                if ( word.length + currentLineLength < width )
                    currentLine.push( word )
                else {
                    lines.push( currentLine )
                    currentLine = [ word ]
                }
                currentLineLength = word.length + 1
            }
            return lines
        }

    //
    // ─── JUSTIFY LEFT ───────────────────────────────────────────────────────────────
    //

        function justifyLeft ( text: string, width: number ) {
            let lines = wordChooser( text, width )
            let lineStrings = new Array<string>( )
            for ( let line of lines )
                lineStrings.push( line.join(' ') )
            return lineStrings.join('\n')
        }

    // ────────────────────────────────────────────────────────────────────────────────

}