# The new UI based on React/Redux
Here we have shown brief description on structure we have created to generate new UI with react/redux application

## Module:	
A module is a bundle of React components, reducers and action creators (together with payload and meta creators if needed). A module takes care of registering components and connecting them to the module's state using the react-redux bindings. It further maps actions to their respective reducers and will automatically create self dispatching action creators.

## Resources:
Resources contains images, plugins and styles (.less).

## Core: 
It contains APIs and checks for authorization, security and access level.

## Components:
Components are mainly created for reusability of code to generate header, navbar, form, panel, sidebar etc.

> App.js manages constants for Development purposes, Import all modules that you want to load as well as Bootstrap the application and Define Routes.
It is basically a wrapper around the Redux store and a Module registry. It exposes methods to configure your Redux store and set up your routing.

