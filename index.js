// Write your code in this file!


function scuberGreetingForFeet (feet) {
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (1999 < feet && feet < 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

function ternaryCheckCity (city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

switch switchOnCharmFromTip (tip) {
  generous = "Thank you so much."
  break;
  not as generous = 'Thank you.'
  break;
  thanks for everything = 'Bye.'
}



describe('switchOnCharmFromTip()', function () {
  it('should return "Thank you so much." if the tip is generous', function () {
    expect(switchOnCharmFromTip('generous')).to.equal('Thank you so much.');
  });

  it('should return "Thank you." if the tip is not as generous', function () {
    expect(switchOnCharmFromTip('not as generous')).to.equal('Thank you.');
  });

  it('should return "Bye." if anything else', function () {
    expect(switchOnCharmFromTip('thanks for everything')).to.equal('Bye.');
  });
});
});


