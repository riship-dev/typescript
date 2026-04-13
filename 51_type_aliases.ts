type coordinate = [number, number];

function compare_coordinates(p1: coordinate, p2: coordinate): coordinate{
    return [p1[0], p2[0]]
}

const coordinates: coordinate = compare_coordinates([3, 4], [5, 6]);
console.log(coordinates);