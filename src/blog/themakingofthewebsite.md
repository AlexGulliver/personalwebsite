---
title: Making this Website 
date: 2024-08-27
description: An overview on how I made this website.
---

Welcome to my personal website! This first post will outline how this website was created.

#### Background / Overview
I've wanted to create a personal website for a while. Me and my friends have been writing together in a Google Drive folder we called the 'Sunday Journal Club' for a while but its wrapped up now. The natural next step was to create my own.

#### Requirements
This website aims to achieve a few things:
- Provide a space for me to share writing.
- Room for expansion for new sections and ideas.
- Be fast.
- Have interactive elements beyond walls of text.

#### Technical Stuff

I'm using [11ty](https://www.11ty.dev/) which is a static site generator.

All website graphics have been created in [Aseprite](https://www.aseprite.org/).

Beyond that its all just HTML, CSS and JS. At least for now. 

The landing page is the most complex part of this simple website. It was an interesting challenge and I'm not entirely sure the way I have gone about it was optimal but it works!

I wanted my website to prioritise interactivity because in my opinion those websites are the most fun. The setting was chosen as a bedroom to make it feel personal although I don't have a pet crab at the moment. 

The background image is a gif which hopefully makes things feel a bit more alive. In prototypes of the website, the background didn't include the interactable elements. Instead, they were added on top of the background but after spending a lot of time wrestling with the styling to keep everything in the same place I gave up and kept them in the background. Another problem with this initial approach was the "hitboxes" for the interactable elements when using img tags originally were all square. To overcome this, I've laid out svgs on top of background and some a script detects when they're being hovered over and replaces the background with another image of the background with the relevant white outline. Whilst this works well for the most part, these new outlined backgrounds are images and not animated. Maybe one day I will sync the animations to keep them going on hover but this seems like a lot of effort for little reward at the moment. 

#### Artwork

To be honest, I've spent the vast majority of the time working on this website on the art over the actual programming. This is because 11ty is simple and pixel-art is tedious. That is not to say I haven't enjoyed the pixel art but rather, I underestimated how long it would take. 

Pixel art is a great medium for indie development. Its super cheap and accessible and there are great resources to learn everywhere. One challenge with using it for the website has been how flexible it is. 

The background is 360x270 scaled up 400% to 1440x1080. Ideally the website would work nicely on phones too but the layout I have at the moment doesn't really work too well when the aspect ratio is flipped around so that will need some thinking. 

If I were to do the art again, I would probably cut down the colour palette to many less colours. I think this would make it easier to keep a theme across the website and make parts of the site using less or even no pixel art easier to connect to the total theme. At the moment its using 32 (+1, black) which makes adding new art take more time. 

#### The future

Looking ahead, I hope to keep updating and maintaining this site. Possibly, over the course of my entire life. It would be nice to document various things and store them in a central location. Closer to now, somewhere to put photographs would be nice and general polish. 