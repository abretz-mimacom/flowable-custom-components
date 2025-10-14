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
The objects that make up the `items` array are intended to support raw aggregation responses from elasticsearch where `doc_count` represents the number of hits in the "bucket" and `key` represents "bucket" identifier/name.
Ex.,

For the given raw Elasticsearch query:

```
{
    "size": 0,
    "track_total_hits": true,
    "query": {
        "bool": {
            "must": [
                {
                    "term": {
                        "scopeDefinitionKey": "tooManyVariables"
                    }
                }
            ]
        }
    },
    "aggs": {
        "by_user": {
            "terms": {
                "field": "assignee",
                "size": 100,
                "min_doc_count": 1,
                "order": {
                    "_count": "desc"
                },
                "missing": "_MISSING_"
            }
        }
    }
}
```

Returns a raw response, like:
```
{
  "took": 3,
  "timed_out": false,
  "_shards": {
    "total": 5,
    "successful": 5,
    "skipped": 0,
    "failed": 0
  },
  "hits": {
    "total": {
      "value": 16200,
      "relation": "eq"
    },
    "max_score": null,
    "hits": []
  },
  "aggregations": {
    "by_user": {
      "doc_count_error_upper_bound": 0,
      "sum_other_doc_count": 0,
      "buckets": [
        {
          "key": "david.davidson",
          "doc_count": 1414
        },
        {
          "key": "peter.schmid",
          "doc_count": 1410
        },
        {
          "key": "clark.kent",
          "doc_count": 1391
        },
        {
          "key": "stephen.springer",
          "doc_count": 1355
        },
        {
          "key": "lisa.schmid",
          "doc_count": 1350
        },
        {
          "key": "annie.austin",
          "doc_count": 1341
        },
        {
          "key": "pippa.pepper",
          "doc_count": 1340
        },
        {
          "key": "boris.blue",
          "doc_count": 1332
        },
        {
          "key": "ella.martin",
          "doc_count": 1332
        },
        {
          "key": "lois.lane",
          "doc_count": 1316
        },
        {
          "key": "oliver.morgan",
          "doc_count": 1310
        },
        {
          "key": "amanda.long",
          "doc_count": 1309
        }
      ]
    }
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
