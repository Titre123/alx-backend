from typing import Tuple

def index_range(page: int, page_size: int) -> Tuple[int]:
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return tuple([start_index, end_index])
