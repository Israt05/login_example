import mapChooser from '../mapChooser'

describe("mapChooser", function(){
    it("returns an image file name based on input given to it", function(){
        let expected = "portland.jpg";
        let actual = mapChooser("portland");
        expect(actual).toEqual(expected);
    });
    it("returns astoria.jpg when astoria is passed inot it", function(){
        let expected = "astoria.jpg";
        let actual = mapChooser("astoria");
        expect(actual).toEqual(expected);
    })

});