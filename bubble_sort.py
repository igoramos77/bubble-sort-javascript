def bubble_sort(array):
    n = len(array)

    for i in range(n - 1):

        for j in range(0, n - i - 1):

            if array[j] > array[j + 1]:
                array[j], array[j + 1] = array[j + 1], array[j]


def print_array(array):
    for i in range(len(array)):
        print(array[i], end=" ")


if __name__ == '__main__':
    arr = [23, 52, 71, 58, 87, 24, 66, 36, 18, 94]
    bubble_sort(arr)
    print_array(arr)
