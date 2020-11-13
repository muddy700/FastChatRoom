var inbox = document.getElementById("incoming-div");
var outbox = document.getElementById("outgoing-div");
var people = document.getElementById("people-div");
var readMessageDiv = document.getElementById("singleMessage-div");
var sender = document.getElementById("senderName-div");
var text = document.getElementById("messageBody-div");
var confirmationDiv = document.getElementById("confirmation-Div");
var confirmationMessage = document.getElementById("confirm-title");

var accountDiv = document.getElementById("account-div");
var head = document.getElementById("header");
var miniHead = document.getElementById("mini-header");
var logPage = document.getElementById("log-in");
var logInError = document.getElementById("logError");
var uname = document.getElementById("userName");
var pass = document.getElementById("logPass");
var logForm = document.getElementById("log-div");

var newNam = document.getElementById("newName");
var messageCreator = document.getElementById("creating-msg");
var inButton = document.getElementById("inbox");
var outButton = document.getElementById("outbox");
var contactButton = document.getElementById("contacts");
var setting = document.getElementById("sidebar");
var responseDiv = document.getElementById("response");
var responseDiv2 = document.getElementById("response2");
var queryArea = document.getElementById("query");
var sendFeed = document.getElementById("sendFeeds");
var passwordArea = document.getElementById("setting");

var profiler = document.getElementById("profile");
var aboutDiv = document.getElementById("about");
var feeds = document.getElementById("feedback");
var passArea = document.getElementById("password");
var passButton = document.getElementById("showPass");
var pass1 = document.getElementById("password1");
var pass2 = document.getElementById("password2");
var passError = document.getElementById("passwordError");
var passwordStatus = '1';

var profileLetter = document.getElementById("photo");
var profileName = document.getElementById("name");
var receiverName = document.getElementById("destination");
var messageBody = document.getElementById("messageContent");
var messageBody2 = document.getElementById("messageContent2");
var themeStatus = '1';
var themeMode = document.getElementById("theme");
var menuButton1 = document.getElementById("menu1");
var menuButton2 = document.getElementById("menu2");
var menuButton3 = document.getElementById("menu3");
var menuButton4 = document.getElementById("menu4");
var closeButton1 = document.getElementById("closeBar1");
var closeButton2 = document.getElementById("closeBar2");
var closeButton3 = document.getElementById("closeBar3");
var closeButton4 = document.getElementById("closeBar4");
var closeButton5 = document.getElementById("closeBar5");

var markAll = document.getElementById("mark");
var clearIn = document.getElementById("cin");
var clearOut = document.getElementById("cout");
var passChange = document.getElementById("changePass2");
var helping = document.getElementById("help");
var logInput = document.getElementById("log");
var aboutInput =document.getElementById("abt");
var profileInput = document.getElementById("prof");
var outerDiv = document.getElementById("container");
var titleArea = document.getElementById("title");
var tail = document.getElementById("footer");
var buttonInbox = document.getElementById("inbox");
var buttonOutBox = document.getElementById("outbox");
var buttonContacts = document.getElementById("contacts");
var newSms = document.getElementById("Add-sms");

var error2 = document.getElementById("accountError2");
var error3 = document.getElementById("accountError3");
var error4 = document.getElementById("accountError4");
var receiverError = document.getElementById("receiver-Error");
var accountPass1 = document.getElementById("accountPassword1");
var accountPass2 = document.getElementById("accountPassword2");
var allClear = '';
var permissionToAddAccount = '';
var permissionToSendMsg = '';
var checkName = '';
var checkReceiver = '';
var noReceiver ;
var noName ;
var inboxClearStatus = '';
var inboxLimit;
var outboxClearStatus = '';
var outboxLimit;
var requestedPermission;
var scanner = 0 ;
// var from ;

var found = '';
var msgFound = '';

var sentMessage ={
    source : '' ,
    destination : '' ,
    content : '' 
}

var activeInbox = [
    { source: 'System admin' , destination: 'Users' , content: 'Welcome' } 
                   ];

var activeOutbox = [
    { source: 'Users', destination: 'System Admin', content: 'Thank You For Your Kindness.' }
                    ];

var inboxClearedList = [
    { user: 'admin' , inLimit: ''}
                    ];

var outboxClearedList = [
    { user: 'admin', outLimit: '' }
];
var inboxMessage = [
    { source: 'admin2', destination: 'admin1', content: ' Message From Admin2 To Admin one1.' } ,
    { source: 'admin1', destination: 'admin2', content: ' Message From Admin1 To Admin two1.' },
    { source: 'a', destination: 'admin3', content: ' Message From A To Admin three1.' },
    { source: 'a', destination: 'admin4', content: ' Message From A To Admin four1.' },
    { source: 'admin4', destination: 'admin1', content: ' Message From Admin4 To Admin one2' },
    { source: 'admin4', destination: 'admin2', content: ' Message From Admin4 To Admin two2.' },
    { source: 'admin1', destination: 'admin3', content: ' Message From Admin1 To Admin three2.' },
    { source: 'admin3', destination: 'a', content: ' Message From Admin3 To A1.' },
    { source: 'admin3', destination: 'admin1', content: ' Message From Admin3 To Admin one3.' },
    { source: 'admin2', destination: 'a', content: ' Message From Admin2 To A2.' },
    { source: 'admin2', destination: 'admin4', content: ' Message From Admin2 To Admin four2.' },
    { source: 'admin1', destination: 'a', content: ' Message From Admin1 To A3.' },
                    ];

var user = [
    { userName: 'admin1', password: '1' },
    { userName: 'admin2', password: '2' },
    { userName: 'admin3', password: '3' },
    { userName: 'admin4', password: '4' },
    { userName: 'a', password: '' },
    { userName: 'System admin', password: 'sa' },
            ] ;

var activeUser = {
    userName : '' ,
    password : ''
};

function loadingPage(){

    setting.hidden = true;
    confirmationDiv.hidden = true;
    messageCreator.hidden = true;
    responseDiv.hidden = true;
    responseDiv2.hidden = true;
    feeds.hidden = true;
    passwordArea.hidden = true;
    profiler.hidden = true;
    aboutDiv.hidden = true;
    outbox.hidden = true;
    people.hidden = true;
    inbox.hidden = false;
    accountDiv.hidden = true;
    document.form12.user.focus();
    readMessageDiv.hidden = true;

}

function goInbox() {
    inbox.hidden = false;
    people.hidden = true;
    outbox.hidden = true;
    messageFilter();
}

function goOutbox(){

    inbox.hidden = true;
    people.hidden = true;
    outbox.hidden = false;
    messageCreator.hidden = true;

    if (outboxClearStatus ==='1') {
        outbox.innerHTML = '';
        for (var n = outboxLimit; n < activeOutbox.length; n++) {
            outbox.innerHTML += '<div style= "margin-right : 2%; margin-top : 2%;"> To : <b> ' + activeOutbox[n].destination.toUpperCase() + '</b> <br />' + activeOutbox[n].content + '</div>';

        }
        
    } 
    
    else {
        outbox.innerHTML = '';
        for (var n = 1; n < activeOutbox.length; n++) {
            outbox.innerHTML += '<div style= "margin-right : 2%; margin-top : 2%;"> To : <b> ' + activeOutbox[n].destination.toUpperCase() + '</b> <br />' + activeOutbox[n].content + '</div>';

        }
        
    }
}

function listContacts() {

    if (confirmationDiv.hidden === false) {
        confirmationDiv.style.backgroundColor = 'red';
    }
    else{
    inbox.hidden = true;
    people.hidden = false;
    outbox.hidden = true;
    people.innerHTML = 'This Feature Will Come Soon';
    }
}

function callSetting(){

    setting.hidden = false;
    passwordArea.hidden = true;
    profiler.hidden = true;
    aboutDiv.hidden = true;
    feeds.hidden = true;
    sendFeed.hidden = false;
    queryArea.hidden = false;
}

function closeSetting() {

    if(confirmationDiv.hidden === false){
        confirmationDiv.style.backgroundColor = 'red';
    }
    else {
        setting.hidden = true;
        aboutDiv.hidden = true;
        profiler.hidden = true;
    }
}

function changeBackgroundColor(){
    confirmationDiv.style.backgroundColor = 'darkgray';
}

function openProfile(){

    profiler.hidden = false;
    setting.hidden = true;
}

function showPassword(){

    if (passwordStatus === '2') {

        passArea.value = '********';
        passButton.value = 'Show Password';
        passwordStatus = '1';
    }
    
    else if (passwordStatus === '1') {

        passArea.value = activeUser.password;
        passButton.value = 'Hide Password';
        passwordStatus = '2';
        
    }

}

function showAbout(){

    aboutDiv.hidden = false;
}

function callFeedBack(){

    feeds.hidden = false;
    responseDiv.hidden = true;
}

function showResponse(){

    responseDiv.hidden = false;
    sendFeed.hidden = true;
    queryArea.hidden = true;
}

function changePassword(){

    passwordArea.hidden = false;
    document.passForm.hidden = false;
    pass1.value = '';
    pass2.value = '';
    passError.innerHTML = '';
    responseDiv2.hidden = true;
    document.passForm.passwords1.focus();
}

 function verifyPassword(){

    if (pass1.value != pass2.value) {

        document.passForm.passwords2.focus();
        passError.innerHTML = 'Password Did Not Match';        
    }
    
    else {
        
        responseDiv2.hidden = false;
        document.passForm.hidden = true;
        activeUser.password = pass2.value;

          for(var i = 0 ; i<user.length ; i++){
        if (user[i].userName === activeUser.userName) {
            user[i].password = activeUser.password;
        }
    }

 }}

function changeTheme() {

    if (themeStatus === '2') {
        themeMode.value = 'Dark Mode';
        setting.style.backgroundColor = 'lightgray';
        profiler.style.backgroundColor = 'lightgray';
        aboutDiv.style.backgroundColor = 'lightgray';
        passwordArea.style.backgroundColor = 'lightgray';
        feeds.style.backgroundColor = 'lightgray';
        outerDiv.style.backgroundColor = 'white';
        tail.style.backgroundColor = 'black';

        markAll.style.color = 'black';
        outerDiv.style.color = 'black';
        aboutInput.style.color = 'black';
        profileInput.style.color = 'black';
        logInput.style.color = 'black';
        helping.style.color = 'black';
        passArea.style.color = 'black';
        passChange.style.color = 'black';
        clearIn.style.color = 'black';
        clearOut.style.color = 'black';
        closeButton1.style.color = 'black';
        closeButton2.style.color = 'black';
        closeButton3.style.color = 'black';
        closeButton4.style.color = 'black';
        closeButton5.style.color = 'black';
        feeds.style.color = 'black';
        profiler.style.color = 'black';
        aboutDiv.style.color = 'black';
        passwordArea.style.color = 'black';
        menuButton1.style.color = 'black';
        menuButton2.style.color = 'black';
        menuButton3.style.color = 'black';
        menuButton4.style.color = 'black';
        themeMode.style.color = 'black';
        tail.style.color = 'white';
        buttonContacts.style.color = 'white';
        buttonInbox.style.color = 'white';
        buttonOutBox.style.color = 'white';  
        readMessageDiv.color = 'white'; 
        themeStatus = '1';
    }

    else if (themeStatus === '1') {
        themeMode.value = 'Light Mode';
        setting.style.backgroundColor = 'black';
        profiler.style.backgroundColor = 'black';
        aboutDiv.style.backgroundColor = 'black';
        passwordArea.style.backgroundColor = 'black';
        feeds.style.backgroundColor = 'black';
        outerDiv.style.backgroundColor = 'black';
        tail.style.backgroundColor = '#c89666';
        newSms.style.backgroundColor = '#c89666';
        
        readMessageDiv.style.color = 'black';
        markAll.style.color = 'white';
        outerDiv.style.color = 'white';
        aboutInput.style.color = 'white';
        profileInput.style.color = 'white';
        logInput.style.color = 'white';
        helping.style.color = 'white';
        tail.style.color = 'black';
        passArea.style.color = 'white';
        passChange.style.color = 'white';   
        clearIn.style.color = 'white';
        clearOut.style.color = 'white'; 
        closeButton1.style.color = 'white';
        closeButton2.style.color = 'white';
        closeButton3.style.color = 'white';
        closeButton4.style.color = 'white';
        closeButton5.style.color = 'white';
        feeds.style.color = 'white';
        profiler.style.color = 'white';
        aboutDiv.style.color = 'white';
        passwordArea.style.color = 'white';
        menuButton1.style.color = 'white';
        menuButton2.style.color = 'white';
        menuButton3.style.color = 'white';
        menuButton4.style.color = 'white';
        themeMode.style.color = 'white';
        titleArea.style.color = 'black';
        buttonContacts.style.color = '#c89666';
        buttonInbox.style.color = '#c89666';
        buttonOutBox.style.color = '#c89666';
        themeStatus = '2';

    }
}

function clearInbox(){

    closeSetting();
    inbox.hidden = false;
    inboxClearStatus = '1';
    inboxLimit = activeInbox.length;
    showInbox();
    inboxClearedList[inboxClearedList.length] = {
        user: activeUser.userName,
        inLimit: activeInbox.length
    }
}

function clearOutbox() {

    closeSetting();
    outbox.hidden = false;
    inbox.hidden = true;
    outboxClearStatus = '1';
    outboxLimit = activeOutbox.length;
    goOutbox();
    outboxClearedList[outboxClearedList.length] = {
        user: activeUser.userName,
        outLimit: activeOutbox.length
    }
    
    // outbox.innerHTML = 'No Any Message Sent Yet.';
}

function logIn(){
    inbox.innerHTML = '';
    for(var i = 0 ; i<user.length ; i++){
     if (uname.value === user[i].userName && pass.value === user[i].password ) {

        logPage.hidden = true;
        loadingPage();
        activeUser.userName = user[i].userName;
        activeUser.password = user[i].password;
        profileLetter.innerHTML = activeUser.userName.charAt(0).toUpperCase();
        profileName.innerHTML = activeUser.userName.toUpperCase();
        uname.value = '';
        pass.value = '';

        for(var p =  0 ; p < inboxClearedList.length ; p++){
            if(inboxClearedList[p].user === user[i].userName ){
                inboxClearStatus = '1';
                inboxLimit = inboxClearedList[p].inLimit;
                messageFilter();
            }            
        }

         for (var p = 0; p < outboxClearedList.length; p++) {
             if (outboxClearedList[p].user === user[i].userName) {
                 outboxClearStatus = '1';
                 outboxLimit = outboxClearedList[p].outLimit;
                 messageFilter();
             }
         }
        messageFilter();
    }
    
    else {

        logInError.innerHTML = 'Incorrect Username Or Password';
        document.form12.user.focus();
    }
  }
}

function messageFilter() {

    msgFound = '';
    activeInbox.length = 1;
    activeOutbox.length = 1;
    outbox.innerHTML = '';
    inbox.innerHTML = '';

    // Filter Messages For CurrentUser 
    for (var j = 0; j < inboxMessage.length; j++) {
        // for (var j = inboxMessage.length - 1; j >= 0; j--) {

        if (activeUser.userName === inboxMessage[j].destination) {

            msgFound = '1';
            // inbox.innerHTML += '<div style = "margin-top : 2%;"> &nbsp; <b> ' + inboxMessage[j].source.toUpperCase() + ' </b>  <br />  &nbsp; &nbsp;' + inboxMessage[j].content + '</div>';
            activeInbox[activeInbox.length] = {
                source: inboxMessage[j].source,
                destination: inboxMessage[j].destination,
                content: inboxMessage[j].content
            }
        }

        if (activeUser.userName === inboxMessage[j].source) {

            msgFound = '2';
            // inbox.innerHTML += '<div style = "margin-top : 2%;"> &nbsp; <b> ' + inboxMessage[j].source.toUpperCase() + ' </b>  <br />  &nbsp; &nbsp;' + inboxMessage[j].content + '</div>';
            activeOutbox[activeOutbox.length] = {
                source: inboxMessage[j].source,
                destination: inboxMessage[j].destination,
                content: inboxMessage[j].content
            }

        }
    }

    if (msgFound === '1' || activeInbox[0].destination === 'Users') {
        showInbox();
    }

    if (msgFound === '2' || activeOutbox[0].source === 'Users') {

        for (var n = 1; n < activeOutbox.length; n++) {
            outbox.innerHTML += '<div style= "margin-right : 2%; margin-top : 2%;"> To : <b> ' + activeOutbox[n].destination.toUpperCase() + '</b> <br />' + activeOutbox[n].content + '</div>';

        }

    }

    else {
        outbox.innerHTML += ' Not Yet >> ';

    }
}

function showInbox() {

    if (inboxClearStatus === '1' ) {
        inbox.innerHTML = '';
        for (var m = activeInbox.length - 1; m >= inboxLimit; m--) {
            // inbox.innerHTML += '<div style = "margin-top : 2%;"> &nbsp; <b> ' + activeInbox[m].source.toUpperCase() + ' </b>  <br />  &nbsp; &nbsp;' + activeInbox[m].content.substring(0 , 20) + '...</div>';
            inbox.innerHTML += '<div style = "margin-top : 2%;"  onclick="openMessage()"> &nbsp; <b> ' + activeInbox[m].source.toUpperCase()  +' </b>  <br />  &nbsp; &nbsp;' + activeInbox[m].content +  '</div>';

        }

        inbox.innerHTML += '<input type="button" id="Add-sms" value="New Sms" onclick="createMessage()">';  
    } 
    
    else {
        
    
    activeInbox[0].content = ' Welcome ' + activeUser.userName.toLocaleUpperCase() + ', Share Whatever You Like With Your Friends With No Limitations.'
    for (var m = activeInbox.length - 1; m >= 0; m--) {
        // scanner = m ;
        // inbox.innerHTML += '<div style = "margin-top : 2%;"> &nbsp; <b> ' + activeInbox[m].source.toUpperCase() + ' </b>  <br />  &nbsp; &nbsp;' + activeInbox[m].content.substring(0 , 20) + '...</div>';
        inbox.innerHTML += '<div style = "margin-top : 2%;" onclick="openMessage()"> &nbsp; <b> ' + activeInbox[m].source.toUpperCase() + ' </b>  <br />  &nbsp; &nbsp;' + activeInbox[m].content + '</div>';

    }    

    inbox.innerHTML += '<input type="button" id="Add-sms" value="New Sms" onclick="createMessage()">';  
}
}

// function scanMessage(){
// scanner = 1;
//     onmouseover = "scanMessage()";

// }

function clearAccountError(){
    error2.innerHTML = '';
    error3.innerHTML = '';
    error4.innerHTML = '';
    receiverError.innerHTML = '';
}

function validateName(){
    noName = 0;
    for (j = 0; j < user.length; j++) {
        if (newNam.value === user[j].userName) {
            checkName = '1';
        }
        if (newNam.value != user[j].userName) {
            noName += 1;
        }
    }
    if (noName === user.length) {
        checkName = '';
        permissionToAddAccount = '1';
    }
    else if (checkName === '1') {
        error2.innerHTML = 'UserName Has Been Taken.';
        document.accountForm.uName.focus();
        permissionToAddAccount = '2';
    }

}

function createAccount(){

    validateName();
    if(newNam.value === ''){
        error2.innerHTML = 'Username Cannot Be Blank.';
        document.accountForm.uName.focus();
    }
    else if (accountPass1.value === '' && accountPass2.value === '') {
        error3.innerHTML = 'Passwords Cannot Be Blank';
        document.accountForm.password1.focus();

    }

    else if(accountPass1.value != accountPass2.value){
        error4.innerHTML = 'Passwords Did Not Match.';
        document.accountForm.password2.focus();
    }
    else if (accountPass1.value === accountPass2.value) {
        allClear = '1';
    }

    if(allClear ==='1' && permissionToAddAccount === '1') {
    user[user.length] = { 
        userName: newNam.value , 
        password : accountPass2.value };
        newNam.value = '';
        accountPass1.value = '';
        accountPass2.value = '';
        allClear = '';

    callLoginPage();
       }
    }

function callAccountPage(){

    loadingPage();
    inbox.hidden = true;
    accountDiv.hidden = false;
    logPage.hidden = true;
    head.hidden = true;
    miniHead.hidden = true;
    document.accountForm.uName.focus();
}

function callLoginPage() {

    accountDiv.hidden = true;
    logPage.hidden = false;
    uname.value = '';
    pass.value = '';
    head.hidden = false;
    miniHead.hidden = false;
    document.form12.user.focus();
}

function clearLogError(){

    logInError.innerHTML = '';
}

function logOut(){

    loadingPage();
    logPage.hidden = false;
    logInError.innerHTML = '';
    outbox.innerHTML = '';
    msgFound = '';
    activeInbox.length = 1;
    activeOutbox.length = 1;
    inboxLimit = '';
    inboxClearStatus = '';
    outboxLimit = '';
    outboxClearStatus = '';
}

function createMessage(){

    if (confirmationDiv.hidden === false) {
        confirmationDiv.style.backgroundColor = 'red';
    }
    else{
    messageCreator.hidden = false;
    inbox.hidden = true;
    document.smsForm.receiver.focus();
    }
}

function validateReceiver() {
    noReceiver = 0;
    checkReceiver = '';
    for (j = 0; j < user.length; j++) {
        if (receiverName.value === user[j].userName) {
            checkReceiver = '1';
        }
        if (receiverName.value != user[j].userName) {
            noReceiver += 1;
        }
    }
    if (noReceiver === user.length) {
        receiverError.innerHTML = 'Receiver Doesn\'t Exists';
        permissionToSendMsg = '';
        document.smsForm.receiver.focus();
    }
    if (checkReceiver === '1') {
        noReceiver = 0;
        permissionToSendMsg = '1';
    }
}

function sendMessage(){

    // permissionToSendMsg = '';
    validateReceiver();
    if (receiverName.value === '') {
        receiverError.innerHTML = 'Add Receiver';
        document.smsForm.receiver.focus();
    }
    else if(permissionToSendMsg === '1'){
    goOutbox();
    outbox.hidden = false;
    messageCreator.hidden = true;
    inboxMessage[inboxMessage.length] = {
        source: activeUser.userName ,
        destination: receiverName.value ,
        content: messageBody.value
    }
    outbox.innerHTML += '<div style = "margin-right : 2%; margin-top : 2%;" > To : ' + receiverName.value.toUpperCase() + '<br />' + messageBody.value + '</div>';
    found = '1';
    
    buttonInbox.value = 'Inbox(1)';
    receiverName.value = '';
    messageBody.value = '';
    }
}

function replyMessage() {
    goOutbox();
    loadingPage();
    readMessageDiv.hidden = true;
    miniHead.hidden = false;
    inbox.hidden = true;
    outbox.hidden = false;
    // messageCreator.hidden = true;
    inboxMessage[inboxMessage.length] = {
        source: activeUser.userName,
        destination: sender.innerHTML,
        content: messageBody2.value
    }
    outbox.innerHTML += '<div style = "margin-right : 2%; margin-top : 2%;" > To : ' + sender.innerHTML.toUpperCase() + '<br />' + messageBody2.value + '</div>';
    // found = '1';

    // receiverName.value = '';
    messageBody2.value = '';

}

function openMessage(){
    loadingPage();
    readMessageDiv.hidden = false;
    inbox.hidden = true;
    miniHead.hidden = true;
    sender.innerHTML = activeInbox[scanner].source;
    text.innerHTML = activeInbox[scanner].content;
    document.replyForm.replyInput.focus();
    buttonInbox.value = 'Inbox';
}

function closeSingleMessage(){
    loadingPage();
    readMessageDiv.hidden = true;
    miniHead.hidden = false;
}

function callConfirmation(issue){

    if (issue === 'logout') {
        if (confirmationDiv.hidden === false) {
            confirmationDiv.style.backgroundColor = 'red';
        }
        else{
        confirmationMessage.innerHTML = 'Are You Sure You Want To Logout?';
        requestedPermission = 'logout';
        }        
    }
    else if(issue === 'inbox'){
        confirmationMessage.innerHTML = 'Are You Sure You Want To Delete Inbox Messages?';
        requestedPermission = 'inbox';
    } 
    else if(issue === 'outbox'){
        confirmationMessage.innerHTML = 'Are You Sure You Want To Delete Outbox Messages?';  
        requestedPermission = 'outbox';    
    }
    confirmationDiv.hidden = false;
    setting.disabled = true;
}

function givePermission(){
    if (requestedPermission === 'logout' ) {
        logOut();        
    }
    else if(requestedPermission === 'inbox'){
        clearInbox();
    } 
    else if(requestedPermission === 'outbox'){
        clearOutbox();
    }
    requestedPermission = '';
    confirmationDiv.hidden = true;
    setting.disabled =  false;
}

function closeConfirmation(){
    confirmationDiv.hidden = true;
}

// function confirmFirst(){
//     if(confirmationDiv.hidden === false){
//         confirmationMessage.innerHTML = 'yes';
//     }
// }