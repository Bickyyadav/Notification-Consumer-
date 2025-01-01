import { SQSClient, ReceiveMessageCommand } from "@aws-sdk/client-sqs";
import dotenv from "dotenv";
dotenv.config();

const sqsClient = new SQSClient({
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.ACCESS_KEY_SECRET,
  },
});

async function main() {
  const command = new ReceiveMessageCommand({
    QueueUrl: process.env.QUEUE_URL,
    MaxNumberOfMessages: 1,
  });

  while (true) {
    const { Messages } = await sqsClient.send(command);


    if (!Messages) {
      console.log("No message found");
      continue;
    }

    Messages.map(({ MessageId, Body }) => {
      console.log("🚀 ~ Messages.map ~ Body:", Body);
      // get order id,user name,amount paid,email,phone
      
      //send mail,sms
      //delete from queue
      console.log("🚀 ~ Messages.map ~ MessageId:", MessageId);
    });
  }
}

main()