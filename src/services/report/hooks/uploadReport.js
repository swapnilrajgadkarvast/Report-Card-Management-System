import { google } from 'googleapis'
import path from 'path'
import * as fs from 'fs'
import { fileURLToPath } from 'url'

export const uploadReport = () => {
  return async (context) => {
    console.log(context.data.file)
    console.log(context.params)
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    console.log(context.params.file)
    const client_ID = '455788008554-rm1gr3pdpcuc79g9rklnpm9m0j5ei3pv.apps.googleusercontent.com'
    const client_Secret = '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'
    const REDIRECT_URL = 'https://developers.google.com/oauthplayground'

    const REFRESH_TOEKN =
      '1//04hLREM82lW8HCgYIARAAGAQSNwF-L9Ir_ho2gnnttam16HwuF30BytPsBm9vPLQqPcte9ecrwcDSJJG2SBcXqnGe5TyCR7PJcQ8'
    const oauth2Client = new google.auth.OAuth2(client_ID, client_Secret, REDIRECT_URL)

    oauth2Client.setCredentials({ refresh_token: REFRESH_TOEKN })

    const drive = google.drive({
      version: 'v3',
      auth: oauth2Client
    })
    // console.log(path)
    console.log(__dirname)

    const filePath = `src/services/PDFs/${student_report.pdf}`
    let driveFile_Id
    try {
      let response = await drive.files.create({
        requestBody: {
          name: context.data.student.firstName,
          mimeType: context.params.file.mimetype
        },
        media: {
          mimeType: context.params.file.mimetype,
          body: fs.createReadStream(filePath)
        }
      })
      driveFile_Id = response.data.id
    } catch (error) {
      console.log(error.message)
    }

    let file_Url
    try {
      await drive.permissions.create({
        fileId: driveFile_Id,
        requestBody: {
          role: 'reader',
          type: 'anyone'
        }
      })
      const response = await drive.files.get({
        fileId: driveFile_Id,
        fields: 'webViewLink, webContentLink'
      })
      file_Url = response.data
    } catch (error) {
      console.log(error.message)
    }

    // console.log(file_Url)
    delete context.data.file
    context.data.driveFile_Id = driveFile_Id
    context.data.path = file_Url.webViewLink
    return context
  }
}
