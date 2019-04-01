# AWS Cognito Login Component
A simple web component for logging into AWS ognito 

[![Build Status](https://travis-ci.org/wogworkz/login-component.svg?branch=master)](https://travis-ci.org/wogworkz/login-component)
[![Published on npm](https://img.shields.io/npm/v/@wogworkz/login-component.svg)](https://www.npmjs.com/package/@wogworkz/login-component)

## Overview

This component was created with Lit-Element. In order to use this component you need to have a Cognito User Pool Id and an application client id.

## Attributes
userPoolId - String - The Cognito user Pool Id\
clientId - String - Your application client Id\
redirectUrl - String - The url to redirect to after successful login.



## Installation
From inside your project folder, run:

```bash
$ npm install @wogworkz\login-component
```

Add the following to the head element
```html
<script type="text/javascript" src="login_component.bundle.min.js"></script>
```
## Usage
```html
<login-component userPoolId="userpoolId" redirectUrl="/redirect" clientId="clientId"></login-component>
```


## Supported Browsers

The last 2 versions of all modern browsers are supported, including
Chrome, Safari, Opera, Firefox.

