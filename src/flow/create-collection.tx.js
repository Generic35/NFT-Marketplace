export const CREATE_COLLECTION = `
import DappyContract from 0xDappy

transaction {
	prepare(acct: AuthAccount) {
		let collection <-  DappyContract.createEmptyCollection()
		acct.save<@DappyContract.Collection>(<-collection, to: DappyContract.CollectionStoragePath)
		acct.link<&DappyContr act.CollectionPublic>(DappyContract.CollectionPublicPath, target: DappyContract.CollectionStoragePath)
	}
}
`