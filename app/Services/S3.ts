/* import Env from '@ioc:Adonis/Core/Env'
import { Readable } from 'stream'
import aws from 'aws-sdk'
import fs from 'fs'

const endpoint = new aws.Endpoint(`${Env.get('DIG_OCE_ENDPOINT')}`)

const s3 = new aws.S3({
  endpoint: endpoint,
  credentials: new aws.Credentials(
    `${Env.get('DIG_OCE_ACCESS_KEY_ID')}`,
    `${Env.get('DIG_OCE_ACCESS_SECRET_KEY')}`
  ),
})

class S3Service {
  public async upload(
    file: fs.ReadStream,
    filename: string,
    ContentType: string,
    folder: string,
    privacidade: aws.S3.ObjectCannedACL
  ): Promise<string> {
    return await new Promise((resolve: (value: string) => void, reject) => {
      s3.upload(
        {
          Bucket: `${Env.get('DIG_OCE_BUCKET')}/${folder}`,
          ContentType,
          Body: file,
          ACL: privacidade,
          Key: filename,
        },
        (err: Error, data: aws.S3.ManagedUpload.SendData) => {
          if (err) {
            console.log(err)
            reject(err)
          }
          console.log(data)
          resolve(data.Location)
        }
      )
    })
  }
  public async getFile(filename: string): Promise<aws.S3.GetObjectOutput> {
    return await new Promise((resolve: (value: aws.S3.GetObjectOutput) => void, reject) => {
      s3.getObject(
        {
          Bucket: `${Env.get('DIG_OCE_BUCKET')}/cert`,
          Key: filename,
        },
        (err, data) => {
          if (err) {
            console.log('reject no get file ' + filename)
            reject(err)
          }
          if (data) {
            resolve(data)
          }
        }
      )
    })
  }

  public async streamToBuffer(stream: Readable): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      let data = Buffer.from([])
      stream.on('data', (chunk) => {
        data = Buffer.concat([data, chunk])
      })
      stream.on('end', () => resolve(data))
      stream.on('error', (err) => reject(err))
    })
  }
}
export default new S3Service()
 */
