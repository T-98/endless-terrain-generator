"use strict";

/* global XXH */
/* exported --
    p3_preload
    p3_setup
    p3_worldKeyChanged
    p3_tileWidth
    p3_tileHeight
    p3_tileClicked
    p3_drawBefore
    p3_drawTile
    p3_drawSelectedTile
    p3_drawAfter
*/

function p3_preload() {}

function p3_setup() {}

let worldSeed;

//Terrain level[Max 10]
let mountain = 7 //up
let grass = 5 // 5 and up
let sand = 4 //between 4 and grass
let water = 4 //below 4
let xnoise;
let ynoise;

function p3_worldKeyChanged(key) {
    worldSeed = XXH.h32(key, 0);
    noiseSeed(worldSeed);
    randomSeed(worldSeed);
}

function p3_tileWidth() {
    return 16;
}

function p3_tileHeight() {
    return 16;
}

let [tw, th] = [p3_tileWidth(), p3_tileHeight()];

let clicks = {};

function p3_tileClicked(i, j) {
    let key = [i, j];
    clicks[key] = 1 + (clicks[key] | 0);
    console.log(i, j);
}

function p3_drawBefore() {}

function p3_drawTile(i, j) {
    noStroke();

    let h = 10 * noise(window.xnoise, window.ynoise);
    //console.log(h);
    //console.log(h)
    if (h < water) {
        //water
        fill(156, 211, 219);
        h = 2;
    } else if (h < grass && h > sand) {
        //sand
        fill(248, 222, 126);
        h = 4;

    } else if (h > mountain) {
        fill(171, 149, 132);
        h = 10;
    } else {
        //grass
        fill(126, 200, 80)
        h = 7;
    }

    push();

    beginShape();
    vertex(0, 0);
    vertex(0, tw);
    vertex(th, tw);
    vertex(th, 0);
    endShape(CLOSE);

    let n = clicks[[i, j]] | 0;
    if (n % 2 == 1) {
        fill(255, 255, 0, 180);
        ellipse(th / 2, tw / 2, 10, 10);
    }

    pop();
}

function p3_drawSelectedTile(i, j) {
    noFill();
    stroke(0, 255, 0, 128);

    beginShape();
    vertex(0, 0);
    vertex(0, tw);
    vertex(th, tw);
    vertex(th, 0);
    endShape(CLOSE);

    noStroke();
    fill(0);
    text("(" + [i, j] + ")", 0, 0);
}

function p3_drawAfter() {}