function Network(){
  return socialka =  new SocialNetwork(generateUsers(), generateEvents());

}
const newSocialNetwork = Network();
console.log(newSocialNetwork);