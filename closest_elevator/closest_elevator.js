function elevator(left, right, call) {
    if (Math.abs(right - call) > Math.abs(left - call)) return "left";
    if (Math.abs(left - call) > Math.abs(right - call)) return "right";
    if (Math.abs(left - call) == Math.abs(right - call)) return "right";
}