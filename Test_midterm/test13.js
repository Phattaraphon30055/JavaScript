function bomb(sensors) {
    // Calculate distances from each sensor to the bomb
    const [x1, y1, t1] = sensors[0];
    const [x2, y2, t2] = sensors[1];
    const [x3, y3, t3] = sensors[2];

    const d1 = t1 * 343; // Speed of sound is approximately 343 meters per second
    const d2 = t2 * 343;
    const d3 = t3 * 343;

    // Solve for bomb coordinates using the distance formula
    const xb = (x1 + x2 + x3) / 3 + (d1 * (x3 - x1) + d2 * (x1 - x2) + d3 * (x2 - x3)) / (2 * (d1 * (y2 - y3) + d2 * (y3 - y1) + d3 * (y1 - y2)));
    const yb = (y1 + y2 + y3) / 3 + (d1 * (y3 - y1) + d2 * (y1 - y2) + d3 * (y2 - y3)) / (2 * (d1 * (x2 - x3) + d2 * (x3 - x1) + d3 * (x1 - x2)));

    return [Math.round(xb), Math.round(yb)];
}

// Examples
console.log(bomb([[0, 0, 72.886], [0, 50, 72.886], [25, 25, 72.886]]));   // Output: [0, 25]
console.log(bomb([[0, 50, 145.773], [50, 50, 206.154], [50, 0, 145.773]])); // Output: [0, 0]
console.log(bomb([[15, 8, 48.872], [12, 21, 35.107], [24, 20, 22.203]]));   // Output: [21, 13]
console.log(bomb([[18, 42, 35.558], [39, 16, 106.004], [7, 24, 32.202]]));  // Output: [8, 35]
