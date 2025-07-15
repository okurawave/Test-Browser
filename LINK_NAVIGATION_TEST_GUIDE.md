# Manual Test Guide for Link Navigation and HTTPS Support

## Test 1: Basic Link Navigation
1. Start the application: `npm start`
2. Navigate to a page with links (e.g., https://github.com/)
3. Click on various links within the page
4. **Expected**: Links should navigate within the same WebView window (not open new windows)
5. **Expected**: The URL bar should update to show the new URL
6. **Expected**: Navigation buttons (back/forward) should be enabled/disabled appropriately

## Test 2: HTTPS Page Display
1. Navigate to various HTTPS sites:
   - https://github.com/
   - https://www.google.com/
   - https://stackoverflow.com/
2. **Expected**: Pages should load without certificate warnings
3. **Expected**: Secure pages should display correctly

## Test 3: Mixed Content Handling
1. Navigate to a secure site (HTTPS)
2. Try to navigate to an insecure site (HTTP)
3. **Expected**: The application should handle mixed content appropriately

## Test 4: Navigation Button Functionality
1. Click on multiple links to build up navigation history
2. Test the back button - should go to previous page
3. Test the forward button - should go to next page (after going back)
4. **Expected**: Buttons should be disabled when no navigation is possible
5. **Expected**: URL bar should update when using navigation buttons

## Test 5: URL Input with Protocols
1. Enter URLs with https:// in the address bar
2. Enter URLs with http:// in the address bar
3. Enter URLs without protocol (should default to https://)
4. **Expected**: All should work correctly

## Test 6: Page Title Updates
1. Navigate to different pages
2. **Expected**: The title bar should update with the page title
3. **Expected**: Format should be "Test-Browser - [Page Title]"

## Test 7: In-Page Navigation
1. Navigate to a page with anchor links
2. Click on anchor links (#section1, #section2, etc.)
3. **Expected**: Should navigate within the same page
4. **Expected**: URL should update with the anchor
5. **Expected**: Navigation should work smoothly

## Verification Checklist
- [ ] Link clicks navigate within same WebView (no new windows)
- [ ] HTTPS pages load correctly
- [ ] URL bar updates on navigation
- [ ] Navigation buttons work correctly
- [ ] Navigation buttons are disabled when appropriate
- [ ] Page titles update correctly
- [ ] Mixed content is handled properly
- [ ] In-page anchor links work
- [ ] Manual URL entry works with different protocols