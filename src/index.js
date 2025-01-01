import {
  SQSClient,
  ReceiveMessageCommand,
  DeleteMessageCommand,
} from "@aws-sdk/client-sqs";
import dotenv from "dotenv";
import { sendEmail } from "./mail.js";
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

    Messages.map(({ MessageId, Body, ReceiptHandle }) => {
      const orderDetail = JSON.parse(Body);
      if (orderDetail) {
        const {
          orderId,
          email,
          customerName,
          status,
          totalAmount,
          phoneNumber,
        } = orderDetail;
        sendEmail(email, status, totalAmount, orderId, customerName);
        //send sms
      }
      //delete from queue
      deleteMessageFromQueue(ReceiptHandle);
    });
  }
}

async function deleteMessageFromQueue(ReceiptHandle) {
  const deleteCommand = new DeleteMessageCommand({
    QueueUrl: process.env.QUEUE_URL,
    ReceiptHandle: ReceiptHandle,
  });
   await sqsClient.send(deleteCommand);
}

main();
