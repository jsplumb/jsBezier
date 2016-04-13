interface Point {
    x: number;
    y: number;
}

interface Curve {
    [index: number]: Point;
}

interface JSBezier {
    distanceFromCurve(curve: Curve, point: Point): number;
    gradientAtPoint(curve: Curve, location: number): number;
    gradientAtPointAlongCurveFrom(curve: Curve, location: number, distance: number) : number;
    nearestPointOnCurve(point: Point, curve: Curve) : Point;
    pointOnCurve(curve: Curve, location: number): Point;
    pointAlongCurveFrom(curve: Curve, location: number, distance: number);
    perpendicularToCurveAt(curve: Curve, location: number, length: number, distance: number): Curve;
    locationAlongCurveFrom(curve: Curve, location, number, distance: number): number;
    getLength(curve: Curve): number;
}

declare var jsBezier: JSBezier;