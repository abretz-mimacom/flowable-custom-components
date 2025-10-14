Use the following test payload inside Flowable Design using the Form debugger:

```
{
  "yourValue": {
    "items": [
      {
        "key": "jim.jones",
        "doc_count": 90
      },
      {
        "key": "roy.rogers",
        "doc_count": 10
      }
    ]
  }
}
```

## Clickable Slices

You can make pie chart slices clickable by configuring a `clickUrl` in the ExtraSettings. The URL supports template interpolation:

**ExtraSettings Example:**
```json
{
  "clickUrl": "/#/myapp/{{$item.value.key}}"
}
```

**Available template variables:**
- `%%$item.value.key%%` - The key from the original data item
- `%%$item.value.doc_count%%` - The value from the original data item
- `%%$item.name%%` - The chart data name
- `%%$item.value%%` - The parsed numeric value

NOTE: This notation, `%%...%%`, to denote an expression is a workaround to what seems as Flowable forms chopping off any expressions with the `{{}}` notation. This is only in the context of the click URL `ExtraSettings` value.

When a slice is clicked, it will open the interpolated URL in a new browser window.

![alt text](assets/image.png)
