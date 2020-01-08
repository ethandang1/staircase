let Juan = sprites.create(img`
. . . . 4 4 4 4 4 4 4 . . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. . . . d d d d d d d . . . . . 
. . . d d 1 f d f 1 d d . . . . 
. . . . d d d d d d d . . . . . 
. . . . d d d 2 d d d . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . . . d . . . . . . . . 
. . . . d 8 d d d 8 d . . . . . 
. . . . d 8 3 d 3 8 d . . . . . 
. . . . d 8 8 8 8 8 d . . . . . 
. . . . d 8 8 8 8 8 d . . . . . 
. . . . . 8 8 8 8 8 . . . . . . 
. . . . . 8 . . . 8 . . . . . . 
. . . . f f . . . f f . . . . . 
`, SpriteKind.Player)
let Juanita = sprites.create(img`
. . . . a a a a a a a . . . . . 
. . . . 3 3 3 3 3 3 3 . . . . . 
. a a a a a a a a a a a a a . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . d d 1 f d f 1 d d . . . . 
. . . 5 d d d d d d d 5 . . . . 
. . . 5 d d d 3 d d d 5 . . . . 
. . . 5 5 d d d d d 5 5 . . . . 
. . . 5 5 5 5 d 5 5 5 5 . . . . 
. . . 5 d a d d d a d 5 . . . . 
. . . 5 d a a a a a d 5 . . . . 
. . . 5 d a a a a a d 5 . . . . 
. . . . d a a a a a d . . . . . 
. . . . . a a a a a . . . . . . 
. . . . . a . . . a . . . . . . 
. . . . f f . . . f f . . . . . 
`, SpriteKind.Player)
scene.setBackgroundColor(1)
forever(function () {
    for (let index = 0; index < 9; index++) {
        Juan.y += 5
        pause(100)
        Juan.x += 8
    }
    for (let index = 0; index < 9; index++) {
        Juan.y += -5
        pause(100)
        Juan.x += -8
    }
    for (let index = 0; index < 9; index++) {
        Juan.y += -5
        pause(100)
        Juan.x += 8
    }
    for (let index = 0; index < 9; index++) {
        Juan.y += 5
        pause(100)
        Juan.x += -8
    }
    for (let index = 0; index < 9; index++) {
        Juan.y += -5
        pause(100)
        Juan.x += -8
    }
    for (let index = 0; index < 9; index++) {
        Juan.y += 5
        pause(100)
        Juan.x += 8
    }
    for (let index = 0; index < 9; index++) {
        Juan.y += 5
        pause(100)
        Juan.x += -8
    }
    for (let index = 0; index < 9; index++) {
        Juan.y += -5
        pause(100)
        Juan.x += 8
    }
})
forever(function () {
    for (let index = 0; index < 9; index++) {
        Juanita.y += 5
        pause(100)
        Juanita.x += -8
    }
    for (let index = 0; index < 9; index++) {
        Juanita.y += -5
        pause(100)
        Juanita.x += 8
    }
    for (let index = 0; index < 9; index++) {
        Juanita.y += -5
        pause(100)
        Juanita.x += -8
    }
    for (let index = 0; index < 9; index++) {
        Juanita.y += 5
        pause(100)
        Juanita.x += 8
    }
    for (let index = 0; index < 9; index++) {
        Juanita.y += -5
        pause(100)
        Juanita.x += 8
    }
    for (let index = 0; index < 9; index++) {
        Juanita.y += 5
        pause(100)
        Juanita.x += -8
    }
    for (let index = 0; index < 9; index++) {
        Juanita.y += 5
        pause(100)
        Juanita.x += 8
    }
    for (let index = 0; index < 9; index++) {
        Juanita.y += -5
        pause(100)
        Juanita.x += -8
    }
})
