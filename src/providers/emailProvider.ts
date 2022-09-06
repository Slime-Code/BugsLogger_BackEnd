interface IAddress {
 email?: string
}

interface IMessage {
 to: IAddress,
 from: IAddress
 subject: string,
 body: string,
}

interface EmailProvider {
 sendEmail(message: IMessage): Promise<void>;
}

export { EmailProvider, IMessage };