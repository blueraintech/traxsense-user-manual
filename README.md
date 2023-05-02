# Installation

Material for MkDocs is published as a Python package and can be installed with pip.

## Make sure you have python installed on your PC

You can do that by typing the following commands into your terminal:

Windows:
`python`

Linux (Ubuntu):
`python3`

If you don't have python installed on your PC, then make sure to download a python 3.X.X version. 

You can do that on windows via https://www.python.org/downloads/

Linux (Ubuntu) should come with python already installed, but if it isn't for some reason then you can type this command into the terminal

`sudo apt update`

followed by

`sudo apt install python3`

## Installing MKDocs-Material
Once Python3 is installed, you can then use pip in a new terminal

`pip install mkdocs-material`

This will automatically install compatible versions of all dependencies: MkDocs, Markdown, Pygments and Python Markdown Extensions. Material for MkDocs always strives to support the latest versions, so there's no need to install those packages separately.

To see what version of MKDocs you have use:

`mkdocs --version`

To run the development server, run the command

`mk serve`

## Documentation Links
The documentation for MKDocs Material can be found here: https://squidfunk.github.io/mkdocs-material/setup/

The base MKDocs theme and its documentation can be found here: https://www.mkdocs.org/user-guide/

To deploy onto DigitalOcean, we can follow this link https://www.starfallprojects.co.uk/projects/deploy-host-docs/deploy-mkdocs-material-digitalocean-app-platform/#prerequisites
