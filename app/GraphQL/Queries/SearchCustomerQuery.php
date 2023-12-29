<?php declare(strict_types=1);

namespace App\GraphQL\Queries;

final class SearchCustomerQuery
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        // TODO implement the resolver
      return \App\Models\Customer::where('name', 'like', '%'.$args['search'].'%')->get();
    }
}
