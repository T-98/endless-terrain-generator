# Endless Landscape Terrain
Author: Divyansh Khare
Credit: Adam Smith/Isaac Karth 
Edited by: Asiiah Song

### Description
A tile based world inspired by Hyper Light Drifter with variations of land, water, sand, and mountainous terrain

#### At least 3 tile types
This world has 4 tile types, namely, water, sand, grass, and mountain

#### Autotiling
The world is autotiled to the effect where each neighbour tile is changed as an effect of a change in an arbiatrary tile. The change in tiling is also dependent upon camera movement

#### Persistent element [Bridging the gap between land masses]
Upon clicking a tile, a persistent brown rectangle is added on the tile coordinates. This remians even when the world keys are different.
The theme centric idea is that this element can represent a bridge and can be chained with multiple instances of itself over a certain number of tiles to bridge the gap between land masses

#### Artist Statement
In an attempted to justify autotiling, I have created a world with terrain variations such that it resembles the maps of some strategy games like age of empires or civilization. The purpose behind using autotiling in map creation is to offer a rich and varied experience to the player while keepiong things simple such that gameplay isn't affected by the limitations of perlin noise. Limiting the map between four elements helped me succesfully achieve this effect.

The tool limitations prevented me from adding a more detailed terrain with shape and size variations as creating a 3-D terrain using "vertex" based geometry would be a nightmare. However, if we can get rid of the grid, then I have created a variation of the current project where the terrain is 3D with varyuing heights based on perlin noise.