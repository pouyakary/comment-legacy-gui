
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

namespace kary.text.ui {

    //
    // ─── INTERFACES ─────────────────────────────────────────────────────────────────
    //

        export interface IBoxModel {
            content: string
            margin?: ISizing
            padding?: ISizing
            boxCharSet?: IBoxCharSet
            justify?: justifier.justifyMode
        }

        export interface ISizing {
            top: number
            right: number
            bottom: number
            left: number
        }

        export interface IBoxCharSet {
            topLeft: string
            top: string
            topRight: string
            right: string
            bottomRight: string
            bottom: string
            bottomLeft: string
            left: string
        }

    //
    // ─── BOX MAKER ──────────────────────────────────────────────────────────────────
    //

        function createBox ( boxModel: IBoxModel ) {

            //
            // ─── DEFAULT MODEL ───────────────────────────────────────────────
            //

                const defaultSizing: ISizing = {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                }
                let usableBoxModel: IBoxModel = {
                    content: '',
                    margin: Object.assign({ }, defaultSizing ),
                    padding: defaultSizing,
                    boxCharSet: {
                        topLeft: '┌',
                        top: '─',
                        topRight: '┐',
                        right: '│',
                        bottomRight: '┘',
                        bottom: '─',
                        bottomLeft: '└',
                        left: '│',
                    },
                    justify: justifier.justifyMode.left
                }

                usableBoxModel = Object.assign( usableBoxModel, boxModel )

            // ─────────────────────────────────────────────────────────────────

        }

    // ────────────────────────────────────────────────────────────────────────────────

}