interface GetFieldsWithSameValuesProps {
 useCaseFields: Record<string, string>
 payloads: {
  incoming: Record<string, any>
  stored: Record<string, any>
 }
}

interface HttpFieldValidationPayload {
 field: string
 message: string
}

export const getFieldsWithSameValues = ({ useCaseFields, payloads }: GetFieldsWithSameValuesProps) => {
 const { incoming, stored } = payloads

 const fields = Object.keys(useCaseFields)

 const httpFields = fields.reduce<HttpFieldValidationPayload[]>((prev, field) => {
  const isSameValue = incoming[field] === stored[field]

  if (!isSameValue) {
   return prev
  }

  return [
   ...prev,
   {
    field,
    message: useCaseFields[field]
   }
  ]
 }, [])

 return httpFields
}
