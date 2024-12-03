const {user,chat}=require('schemaas');
async function createUser(){
    const existingUser=await User.findOne({email:'johndoe@gmail.com'});
    if(existingUser){
        console.log('User already exists',existingUser);
        return;
    }
    const user=new User({
        username:'john',
        email:'johndoe@gmail.com',
        password:'1111'
    });
    await user.save();
    console.log('USer saved:' ,user);
}
// Insert a chat
async function createChat() {
    const chat = new Chat({
      question: 'What is the weather today?',
      answer: 'It’s sunny.',
    });
  
    await chat.save();
    console.log('Chat saved:', chat);
  }
  
  // Call functions
  createUser();
  createChat();