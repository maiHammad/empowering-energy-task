# Getting Started with empowering-energy-task

Please open terminal and run 
npm i
to install necessary packeges
then 
npm start

## solution stacture

this application contains list of components 
- layout components ( menu and header )
- list of screens ( home, under constarction and daily expincess )
### used technologies and libraries 
-react.js
- javascript
- html
- css
  ### libraries
- MUI library
- MUI carousle
- react draggable
- react router
  

### additional information 
i used contextapi as state managment tool to share data between application components 
- folder structure
  * src contains
    - app.jsx ( as base component for the application )
    - cpmonents folder contations
      * header component
      * menu component
        -pages folder
        * home component ( for home page )
        * under const component ( for under constarction component )
        * daily expencess
- opend file components ( this component gets target file data from the context menu and show it inside a popup also contain list of minimized items inside the bottom of the screen ) 
