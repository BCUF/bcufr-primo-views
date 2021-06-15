# bcufr-primo-views
Public repository with the customization packages used SLSP IZ BCUFR (Bibliothèque cantonale et universitaire) for Primo.
- 41SLSP_BCUFR-BFR: [Bibliographie fribourgeoise](https://bcufr.swisscovery.slsp.ch/discovery/search?vid=41SLSP_BCUFR:BFR)
- 41SLSP_BCUFR-BFR: [Discovery Fribourg-Freiburg](https://bcufr.swisscovery.slsp.ch/discovery/search?vid=41SLSP_BCUFR:DFR) (main view)

## SCSS
Both views use SCSS. The compiling of the SCSS files has been adapted in the gulp task file 03-scss.js. Copy the file into the gulp/tasks folder of the Primo development envirnoment provided by Ex Libris (https://github.com/ExLibrisGroup/primo-explore-devenv) and use gulp run with the --useScss option.

## SLSP Agile Customization Project
In the SLSP_Agile_Project folder you can find adaptations of the code developped in the named project. The code has been adapted so that it can be pasted directly into the custom.js file of the customization package.
