//
//  AppDelegate.swift
//  Comment IV
//
//  Created by Pouya Kary on 2/18/16.
//  Copyright (c) 2016 Kary Foundation, Inc. All rights reserved.
//

import Cocoa

import WebKit

@NSApplicationMain
class AppDelegate: NSObject, NSApplicationDelegate {

    @IBOutlet weak var window: NSWindow!

    @IBOutlet weak var View: WebView!

    func applicationDidFinishLaunching(aNotification: NSNotification) {
    
        View.mainFrameURL = NSBundle.mainBundle().pathForResource("index", ofType: "html")
        
    }

    func applicationWillTerminate(aNotification: NSNotification) {

        // NOTHING SPECIAL IN HERE
    
    }


}

