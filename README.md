# jsBezier

This is a set of Bezier curve functions that deal with Beziers, used by jsPlumb, and perhaps useful for other 
people. These functions work with Bezier curves of arbitrary degree.

## Installation

```
npm install jsbezier
```

## Notes

- all input points should be in the format {x:.., y:..}. all output points are in this format too.
- all input curves should be in the format [ {x:.., y:..}, {x:.., y:..}, {x:.., y:..}, {x:.., y:..} ]
- The order of the points is [ start, control point 1, ..., control point N, end ]. `location` as used as an 
input here refers to a decimal in the range [0-1], which indicates a point some proportion along the 
length of the curve. `location` as output has the same format and meaning.

## Function List

### Functions are all in the 'jsBezier' namespace.

- `distanceFromCurve(point, curve)`

Calculates the distance that the given point lies from the given Bezier. Note that it is computed 
relative to the center of the Bezier, so if you have stroked the curve with a wide pen you may wish 
to take that into account! The distance returned is relative to the values of the curve and the point - 
it will most likely be pixels.

- `gradientAtPoint(curve, location)`

Calculates the gradient to the curve at the given location, as a decimal between 0 and 1 inclusive.

- `gradientAtPointAlongCurveFrom(location, distance)`

Calculates the gradient to the curve at the point which is 'distance' units from the given location. 
See `pointAlongCurveFrom`. 

- `nearestPointOnCurve(point, curve)`

Calculates the nearest point to the given point on the given curve. The return value of this is a JS object 
literal, containing both the point's coordinates and also the location of the point (see above), for example: 

		{ point:{ x:551,y:150 }, location:0.263365 }.

- `pointOnCurve(curve, location)`

Calculates the coordinates of the point on the given Bezier curve at the given location.

- `pointAlongCurveFrom(curve, location, distance)`

Calculates the coordinates of the point on the given curve that is `distance` units from `location`. `distance` 
should be in the same coordinate space as that used to construct the Bezier curve. For an HTML Canvas usage, 
for example, `distance` would be a measure of pixels. The return value is a point in the form:

		{ x:..., y:... }

- `locationAlongCurveFrom(curve, location, distance)`

Calculates the location of the point on the given curve that is `distance` units from `location`. 
`distance` should be in the same coordinate space as that used to construct the Bezier curve. For an 
HTML Canvas usage, for example, distance would be a measure of pixels. The return value is a float 
in the range [0,1].

- `pointAlongCurve(curve, location, distance)`

Calculates both the coordinates and location of the point on the given curve that is `distance` units 
from `location`. This function is the function that both `locationAlongCurveFrom` and `pointAlongCurveFrom` 
call. The return value is a JS object containing:

		{ point:the new point, location: location in range [0,1], originalPoint:the reference point }

- `perpendicularToCurveAt(curve, location, length, distance)`

Calculates the perpendicular to the given curve at the given location. `length` is the length of the line 
you wish for (it will be centered on the point at location). `distance` is optional, and allows you to 
specify a point along the path from the given `location` as the center of the perpendicular returned. 
The return value of this is an array of two points: 

		[ {x:...,y:...}, {x:...,y:...} ].