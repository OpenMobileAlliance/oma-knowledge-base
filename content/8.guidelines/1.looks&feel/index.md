---
title: Introduction
description: 'Markdown friendly UX'
layout: doc
---
All of the components, and how to use them are shown in [Components](/guidelines/components/){.text-oma-blue-300 .hover:text-oma-blue-700 .not-prose} section. Since look&feel plays crucial role in UX, here you will find guidelines to all the different styling options.

### OMA Color Shades

OMA consists of five primary colors (**[red]{.text-oma-red-500}**, **[purple]{.text-oma-purple-500}**, **[cyan]{.text-oma-cyan-500}**, **[yellow]{.text-oma-yellow-500}** & **[blue]{.text-oma-blue-500}**). Each of this colors have their value presented in hexadecimal. In order to use the potential of these colors, we have provided diffferent shades of it through [https://maketintsandshades.com/](https://maketintsandshades.com/){.text-oma-blue-300 .hover:text-oma-blue-700 .not-prose}.

Process behind creating this palet was simple; take the hexadecimal value, insert it on site shown above and choose the values. Since the site gives you shades in percentage from your original hexadecimal value to lightest, as well as from original to darkest, we had to choose what percentages we want.

[![shades example oma red](/images/shades-example.jpg)](/images/shades-example.jpg)

> OMA Red (#bc3c38) used for example above

And here is the table that sorted out what percentages are used (every color takes the same percentage)

<table>
        <thead>
            <tr>
                <th>N°</th>
                <th>Tailwind Value</th>
                <th>Percentage %</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>1.</th>
                <th>50</th>
                <th>80%</th>
            </tr>
            <tr>
                <th>2.</th>
                <th>100</th>
                <th>60%</th>
            </tr>
            <tr>
                <th>3.</th>
                <th>200</th>
                <th>40%</th>
            </tr>
            <tr>
                <th>4.</th>
                <th>300</th>
                <th>20%</th>
            </tr>
            <tr>
                <th>5.</th>
                <th>400</th>
                <th>10%</th>
            </tr>
            <tr>
                <th>6.</th>
                <th>500</th>
                <th>0%</th>
            </tr>
            <tr>
                <th>7.</th>
                <th>600</th>
                <th>10%</th>
            </tr>
            <tr>
                <th>8.</th>
                <th>700</th>
                <th>20%</th>
            </tr>
            <tr>
                <th>9.</th>
                <th>800</th>
                <th>30%</th>
            </tr>
            <tr>
                <th>10.</th>
                <th>900</th>
                <th>40%</th>
            </tr>
            <tr>
                <th>11.</th>
                <th>950</th>
                <th>50%</th>
            </tr>
        </tbody>
    </table>

Here is the code representation found in `tailwind.config.ts` file:

```ts
import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  content: [
    'ui.config/*.ts'
  ],
  theme: {
    extend: {
      colors: {
        oma: {
          red: {
            50: '#f2d8d7',
            100: '#e4b1af',
            200: '#d78a88',
            300: '#c96360',
            400: '#c3504c',
            500: '#bc3c38',
            600: '#a93632',
            700: '#96302d',
            800: '#842a27',
            900: '#712422',
            950: '#5e1e1c'
          },
          purple: {
            50: '#e6dcec',
            100: '#cdbad9',
            200: '#b497c6',
            300: '#9b75b3',
            400: '#8f63aa',
            500: '#8252a0',
            600: '#754a90',
            700: '#684280',
            800: '#5b3970',
            900: '#4e3160',
            950: '#412950'
          },
          yellow: {
            50: '#f8eedc',
            100: '#f1ddba',
            200: '#ebcb97',
            300: '#e4ba75',
            400: '#e0b263',
            500: '#dda952',
            600: '#c7984a',
            700: '#b18742',
            800: '#9b7639',
            900: '#856531',
            950: '#6f5529'
          },
          cyan: {
            50: '#e9f6f3',
            100: '#d2ede7',
            200: '#bce4dc',
            300: '#a5dbd0',
            400: '#9ad7ca',
            500: '#8fd2c4',
            600: '#81bdb0',
            700: '#72a89d',
            800: '#649389',
            900: '#567e76',
            950: '#486962'
          },
          blue: {
            50: '#cddcec',
            100: '#9ab8da',
            200: '#6895c7',
            300: '#3571b5',
            400: '#1c60ab',
            500: '#034ea2',
            600: '#034692',
            700: '#023e82',
            800: '#023771',
            900: '#022f61',
            950: '#022751'
          }
        }
      }
    }
  },
  safelist: [
    {
      pattern: /gap-.*/
    }
  ]
}

```

Thus, every shade of OMA official color is now available using Tailwind classes presented in table below.

Feel free to checkout the table below and select the color that suits the best!

::ShMultiColumn
---
cols: 5
---
    :::ShColumn 
    --- 
    ui: # First Column - Red
        wrapper: 
    ---
        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-red-50
            title: text-neutral-600 dark:text-neutral-600 font-mono
        title: |
            oma-red-50
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-red-100
            title: text-neutral-600 dark:text-neutral-600 font-mono
        title: |
            oma-red-100
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-red-200
            title: text-neutral-600 dark:text-neutral-600 font-mono
        title: |
            oma-red-200
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-red-300
            title: text-neutral-600 dark:text-neutral-600 font-mono
        title: |
            oma-red-300
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-red-400
            title: text-neutral-600 dark:text-neutral-600 font-mono
        title: |
            oma-red-400
        ---
        ::::

        ::::ShSegment
        ---
        ui:
            wrapper: mt-3 pt-1 pb-1 pl-2 border-l-8 border-t-8 border-b-8 rounded-l-3xl border-black dark:border-white -mr-4 pr-4
        ---
            :::::ShMicroCard
            ---
            clipboard: true
            ui:
                wrapper: bg-oma-red-500
                title: text-neutral-700 dark:text-neutral-700 font-mono
            title: |
                oma-red-500
            ---
            :::::
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-red-600
            title: text-neutral-300 dark:text-neutral-300 font-mono
        title: |
            oma-red-600
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-red-700
            title: text-neutral-300 dark:text-neutral-300 font-mono
        title: |
            oma-red-700
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-red-800
            title: text-neutral-300 dark:text-neutral-300 font-mono
        title: |
            oma-red-800
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-red-900
            title: text-neutral-300 dark:text-neutral-300 font-mono
        title: |
            oma-red-900
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-red-950
            title: text-neutral-300 dark:text-neutral-300 font-mono
        title: |
            oma-red-950
        ---
        ::::
    :::

    :::ShColumn 
    --- 
    ui: # Second Column - Purple
        wrapper: 
    ---
        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-purple-50
            title: text-neutral-600 dark:text-neutral-600 font-mono
        title: |
            oma-purple-50
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-purple-100
            title: text-neutral-600 dark:text-neutral-600 font-mono
        title: |
            oma-purple-100
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-purple-200
            title: text-neutral-600 dark:text-neutral-600 font-mono
        title: |
            oma-purple-200
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-purple-300
            title: text-neutral-600 dark:text-neutral-600 font-mono
        title: |
            oma-purple-300
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-purple-400
            title: text-neutral-600 dark:text-neutral-600 font-mono
        title: |
            oma-purple-400
        ---
        ::::

        ::::ShSegment
        ---
        ui:
            wrapper: mt-3 pt-1 pb-1 -pr-4 border-t-8 border-b-8 border-black dark:border-white -mr-4 pr-4 
        ---
            :::::ShMicroCard
            ---
            clipboard: true
            ui:
                wrapper: bg-oma-purple-500
                title: text-neutral-700 dark:text-neutral-700 font-mono
            title: |
                oma-purple-500
            ---
            :::::
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-purple-600
            title: text-neutral-300 dark:text-neutral-300 font-mono
        title: |
            oma-purple-600
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-purple-700
            title: text-neutral-300 dark:text-neutral-300 font-mono
        title: |
            oma-purple-700
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-purple-800
            title: text-neutral-300 dark:text-neutral-300 font-mono
        title: |
            oma-purple-800
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-purple-900
            title: text-neutral-300 dark:text-neutral-300 font-mono
        title: |
            oma-purple-900
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-purple-950
            title: text-neutral-300 dark:text-neutral-300 font-mono
        title: |
            oma-purple-950
        ---
        ::::
    :::

    :::ShColumn 
    --- 
    ui: # Third Column - Cyan
    ---
        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-cyan-50
            title: text-neutral-600 dark:text-neutral-600 font-mono
        title: |
            oma-cyan-50
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-cyan-100
            title: text-neutral-600 dark:text-neutral-600 font-mono
        title: |
            oma-cyan-100
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-cyan-200
            title: text-neutral-600 dark:text-neutral-600 font-mono
        title: |
            oma-cyan-200
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-cyan-300
            title: text-neutral-600 dark:text-neutral-600 font-mono
        title: |
            oma-cyan-300
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-cyan-400
            title: text-neutral-600 dark:text-neutral-600 font-mono
        title: |
            oma-cyan-400
        ---
        ::::

        ::::ShSegment
        ---
        ui:
            wrapper: mt-3 pt-1 pb-1 border-t-8 border-b-8 border-black dark:border-white -mr-4 pr-4
        ---
            :::::ShMicroCard
            ---
            clipboard: true
            ui:
                wrapper: bg-oma-cyan-500
                title: text-neutral-700 dark:text-neutral-700 font-mono
            title: |
                oma-cyan-500
            ---
            :::::
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-cyan-600
            title: text-neutral-300 dark:text-neutral-300 font-mono
        title: |
            oma-cyan-600
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-cyan-700
            title: text-neutral-300 dark:text-neutral-300 font-mono
        title: |
            oma-cyan-700
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-cyan-800
            title: text-neutral-300 dark:text-neutral-300 font-mono
        title: |
            oma-cyan-800
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-cyan-900
            title: text-neutral-300 dark:text-neutral-300 font-mono
        title: |
            oma-cyan-900
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-cyan-950
            title: text-neutral-300 dark:text-neutral-300 font-mono
        title: |
            oma-cyan-950
        ---
        ::::
    :::

    :::ShColumn 
    --- 
    ui: # Fourth Column - Yellow
    ---
        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-yellow-50
            title: text-neutral-600 dark:text-neutral-600 font-mono
        title: |
            oma-yellow-50
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-yellow-100
            title: text-neutral-600 dark:text-neutral-600 font-mono
        title: |
            oma-yellow-100
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-yellow-200
            title: text-neutral-600 dark:text-neutral-600 font-mono
        title: |
            oma-yellow-200
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-yellow-300
            title: text-neutral-600 dark:text-neutral-600 font-mono
        title: |
            oma-yellow-300
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-yellow-400
            title: text-neutral-600 dark:text-neutral-600 font-mono
        title: |
            oma-yellow-400
        ---
        ::::

        ::::ShSegment
        ---
        ui:
            wrapper: mt-3 pt-1 pb-1 border-t-8 border-b-8 border-black dark:border-white -mr-4 pr-4
        ---
            :::::ShMicroCard
            ---
            clipboard: true
            ui:
                wrapper: bg-oma-yellow-500
                title: text-neutral-700 dark:text-neutral-700 font-mono
            title: |
                oma-yellow-500
            ---
            :::::
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-yellow-600
            title: text-neutral-300 dark:text-neutral-300 font-mono
        title: |
            oma-yellow-600
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-yellow-700
            title: text-neutral-300 dark:text-neutral-300 font-mono
        title: |
            oma-yellow-700
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-yellow-800
            title: text-neutral-300 dark:text-neutral-300 font-mono
        title: |
            oma-yellow-800
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-yellow-900
            title: text-neutral-300 dark:text-neutral-300 font-mono
        title: |
            oma-yellow-900
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-yellow-950
            title: text-neutral-300 dark:text-neutral-300 font-mono
        title: |
            oma-yellow-950
        ---
        ::::
    :::

    :::ShColumn 
    --- 
    ui: # Fifth Column - Blue
    ---
        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-blue-50
            title: text-neutral-600 dark:text-neutral-600 font-mono
        title: |
            oma-blue-50
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-blue-100
            title: text-neutral-600 dark:text-neutral-600 font-mono
        title: |
            oma-blue-100
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-blue-200
            title: text-neutral-600 dark:text-neutral-600 font-mono
        title: |
            oma-blue-200
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-blue-300
            title: text-neutral-600 dark:text-neutral-600 font-mono
        title: |
            oma-blue-300
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-blue-400
            title: text-neutral-600 dark:text-neutral-600 font-mono
        title: |
            oma-blue-400
        ---
        ::::

        ::::ShSegment
        ---
        ui:
            wrapper: mt-3 pt-1 pb-1 pr-2 border-t-8 border-b-8 border-r-8 rounded-r-3xl border-black dark:border-white
        ---
            :::::ShMicroCard
            ---
            clipboard: true
            ui:
                wrapper: bg-oma-blue-500
                title: text-neutral-700 dark:text-neutral-700 font-mono
            title: |
                oma-blue-500
            ---
            :::::
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-blue-600
            title: text-neutral-300 dark:text-neutral-300 font-mono
        title: |
            oma-blue-600
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-blue-700
            title: text-neutral-300 dark:text-neutral-300 font-mono
        title: |
            oma-blue-700
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-blue-800
            title: text-neutral-300 dark:text-neutral-300 font-mono
        title: |
            oma-blue-800
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-blue-900
            title: text-neutral-300 dark:text-neutral-300 font-mono
        title: |
            oma-blue-900
        ---
        ::::

        ::::ShMicroCard
        ---
        clipboard: true
        ui:
            wrapper: mt-3 bg-oma-blue-950
            title: text-neutral-300 dark:text-neutral-300 font-mono
        title: |
            oma-blue-950
        ---
        ::::
    :::

::