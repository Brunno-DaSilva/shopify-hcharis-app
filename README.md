<img src="https://res.cloudinary.com/duprwuo4j/image/upload/v1596833062/h-charis-online-store/3_lmcig0.png" width="600px" alt="HC Banner" >

# Shopify HCharis App

### Overview:

Simple Shopify "Hello World" store based on my Helena Charis Project.

## Shopify Installation process for Windows Subsystem for Linux

1. Enable Windows Subsystem
   A. Go to Control Panel >Program and Features > Turn Windows feature on or off >> Check the box - Windows Subsystem for Linux
2. Re-start your PC
3. Go to Microsoft Store and install your Linux Subsystem
   A. I choose Unbuntu v20.04.4 LTS
4. While opening your subsystem for the first time:
   A. It will install dependencies
   B. It will ask for a Username and Password creation
5. Install NVM
   A. `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash`
   B. Ensure nvm loader is added at the bottom of the .bashrc file by running ->
   1. `cat /home/bruni-wan-kenobi/.bashrc `
   2. Restart your Bash terminal
   3. Run `nvm install node `
   4. `npm -v `
   5. `node -v`
6. Install the additional "dependencies" needed:
   `sudo apt update`
   `sudo apt-get update`
   `sudo apt install ruby`
   `sudo apt-get install ruby-full`
   `sudo apt-get install build-essential`
   `sudo apt-get install bison openssl curl git-core zlib1g zlib1g-dev libssl-dev libyaml-dev libxml2-dev autoconf libc6-dev ncurses-dev automake libtool`
   `sudo gem install shopify-cli`

---

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.md)

This is a sample app to help developers bootstrap their Shopify app development.

It leverages the [Shopify API Library](https://github.com/Shopify/shopify-node-api) on the backend to create [an embedded app](https://shopify.dev/apps/tools/app-bridge/getting-started#embed-your-app-in-the-shopify-admin), and [Polaris](https://github.com/Shopify/polaris-react) and [App Bridge React](https://shopify.dev/tools/app-bridge/react-components) on the frontend.

This is the repository used when you create a new Node app with the [Shopify CLI](https://shopify.dev/apps/tools/cli).

## Requirements

- If you don’t have one, [create a Shopify partner account](https://partners.shopify.com/signup).
- If you don’t have one, [create a Development store](https://help.shopify.com/en/partners/dashboard/development-stores#create-a-development-store) where you can install and test your app.
- **If you are not using the Shopify CLI**, in the Partner dashboard, [create a new app](https://help.shopify.com/en/api/tools/partner-dashboard/your-apps#create-a-new-app). You’ll need this app’s API credentials during the setup process.

## Installation

Using the [Shopify CLI](https://github.com/Shopify/shopify-cli) run:

```sh
shopify app create node -n APP_NAME
```

Or, you can run `npx degit shopify/shopify-app-node` and create a `.env` file containing the following values:

```yaml
SHOPIFY_API_KEY={api key}           # Your API key
SHOPIFY_API_SECRET={api secret key} # Your API secret key
SCOPES={scopes}                     # Your app's required scopes, comma-separated
HOST={your app's host}              # Your app's host, without the protocol prefix
```

## Developer resources

- [Introduction to Shopify apps](https://shopify.dev/apps/getting-started)
  - [App authentication](https://shopify.dev/apps/auth)
- [Shopify CLI command reference](https://shopify.dev/apps/tools/cli/app)
- [Shopify API Library documentation](https://github.com/Shopify/shopify-node-api/tree/main/docs)

## License

This repository is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
