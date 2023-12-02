enum Resp{
    No = 0,
    Yes = 1
}

function respond(recipient: string, message: Resp): void{
    console.log(recipient);
    console.log(message);
}

respond("Captain Pangyo", Resp.Yes);
