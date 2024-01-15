function canMove(piece, currentPosition, targetPosition) {
    // Convert positions to numeric coordinates
    const currentX = currentPosition.charCodeAt(0) - 'A'.charCodeAt(0);
    const currentY = parseInt(currentPosition.charAt(1));
    const targetX = targetPosition.charCodeAt(0) - 'A'.charCodeAt(0);
    const targetY = parseInt(targetPosition.charAt(1));

    // Check if the target position is within the chessboard boundaries
    if (targetX < 0 || targetX > 7 || targetY < 1 || targetY > 8) {
        return false;
    }

    // Determine the piece type and check if it can move to the target position
    switch (piece.toLowerCase()) {
        case "pawn":
            // Add logic for pawn movement
            // Example: Pawns move forward but have special rules for capturing
            // You can customize this part based on the specific chess rules you want to implement
            return (targetX === currentX && targetY === currentY + 1);
        case "knight":
            // Add logic for knight movement
            // Example: Knights move in an L-shape
            return (
                (Math.abs(targetX - currentX) === 1 && Math.abs(targetY - currentY) === 2) ||
                (Math.abs(targetX - currentX) === 2 && Math.abs(targetY - currentY) === 1)
            );
        case "bishop":
            // Add logic for bishop movement
            // Example: Bishops move diagonally
            return Math.abs(targetX - currentX) === Math.abs(targetY - currentY);
        case "rook":
            // Add logic for rook movement
            // Example: Rooks move horizontally or vertically
            return targetX === currentX || targetY === currentY;
        case "queen":
            // Add logic for queen movement
            // Example: Queens can move horizontally, vertically, or diagonally
            return (
                targetX === currentX || targetY === currentY ||
                Math.abs(targetX - currentX) === Math.abs(targetY - currentY)
            );
        case "king":
            // Add logic for king movement
            // Example: Kings can move one square in any direction
            return (
                Math.abs(targetX - currentX) <= 1 && Math.abs(targetY - currentY) <= 1
            );
        default:
            // Invalid piece type
            return false;
    }
}

// Examples
console.log(canMove("Rook", "A8", "H8"));   // Output: true
console.log(canMove("Bishop", "A7", "G1")); // Output: true
console.log(canMove("Queen", "C4", "D6"));   // Output: false
