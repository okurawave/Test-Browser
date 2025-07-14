# WebView Navigation Manual Test Guide

## Overview
This guide describes how to manually test the WebView and navigation functionality.

## Test Cases

### 1. Initial Page Load
- **Expected**: Application starts with GitHub homepage loaded
- **Verify**: WebView displays GitHub, address bar shows "https://github.com/"

### 2. Address Bar Navigation
- **Action**: Type a URL in the address bar and press Enter
- **Test URLs**: 
  - `google.com` (should auto-add https://)
  - `https://www.youtube.com`
  - `localhost:3000` (should auto-add https://)
- **Expected**: WebView navigates to the new URL, address bar updates

### 3. Back Button
- **Action**: Navigate to multiple pages, then click back button
- **Expected**: 
  - Returns to previous page
  - Button disabled when no history
  - Button enabled when history available

### 4. Forward Button
- **Action**: Use back button, then click forward button
- **Expected**: 
  - Moves forward in history
  - Button disabled when no forward history
  - Button enabled when forward history available

### 5. Reload Button
- **Action**: Click reload button
- **Expected**: Current page reloads

### 6. URL Synchronization
- **Action**: Click links within pages
- **Expected**: Address bar updates to show current URL

### 7. Title Updates
- **Action**: Navigate to different pages
- **Expected**: Window title updates to show page title

## UI Elements to Verify
- ✅ WebView element displaying web content
- ✅ Address bar with URL input
- ✅ Back button (←)
- ✅ Forward button (→)
- ✅ Reload button (⟲)
- ✅ Title bar showing page title
- ✅ Disabled button styling when appropriate

## Keyboard Shortcuts
- **Enter** in address bar: Navigate to URL